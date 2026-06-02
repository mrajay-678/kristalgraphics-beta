const DEFAULT_POST_LIMIT = 20;
const DEFAULT_GRAPH_VERSION = "v25.0";

function getPostLimit() {
  const limit = Number(process.env.INSTAGRAM_POST_LIMIT);

  if (!Number.isFinite(limit) || limit <= 0) {
    return DEFAULT_POST_LIMIT;
  }

  return Math.min(Math.floor(limit), 12);
}

function getGraphBaseUrl() {
  const version =
    process.env.INSTAGRAM_GRAPH_VERSION?.trim() || DEFAULT_GRAPH_VERSION;

  return `https://graph.facebook.com/${version}`;
}

async function fetchInstagramJson(path, searchParams) {
  const url = new URL(`${getGraphBaseUrl()}${path}`);

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 * 60 },
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Instagram request failed (${response.status}): ${errorText}`
    );
  }

  return response.json();
}

function getMediaImageUrl(media) {
  // Reels / Videos
  if (media.media_type === "VIDEO" || media.media_type === "REEL") {
    return media.thumbnail_url || media.media_url;
  }

  // Images
  if (media.media_url) {
    return media.media_url;
  }

  // Carousel fallback
  const child = media.children?.data?.find(
    (item) => item.media_url || item.thumbnail_url
  );

  if (!child) {
    return null;
  }

  return child.thumbnail_url || child.media_url;
}

export async function getInstagramPosts() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken) {
    console.error("INSTAGRAM_ACCESS_TOKEN missing");
    return [];
  }

  if (!userId) {
    console.error("INSTAGRAM_USER_ID missing");
    return [];
  }

  try {
    const media = await fetchInstagramJson(`/${userId}/media`, {
      fields:
        "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
      limit: getPostLimit(),
      access_token: accessToken,
    });

    console.log(
      "Instagram posts found:",
      media?.data?.length || 0
    );

    return (media?.data || [])
      .map((post) => ({
        id: post.id,
        caption: post.caption || "Instagram post",
        imageUrl: getMediaImageUrl(post),
        mediaType: post.media_type,
        permalink: post.permalink,
        timestamp: post.timestamp,
      }))
      .filter(
        (post) =>
          post.id &&
          post.imageUrl &&
          post.permalink
      )
      .slice(0, getPostLimit());
  } catch (error) {
    console.error("Instagram API Error:", error);
    return [];
  }
}