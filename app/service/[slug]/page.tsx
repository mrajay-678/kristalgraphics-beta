import { notFound } from "next/navigation";
import { services } from "@/data/kg/services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-60">
      <div className="w-11/12 mx-auto">
        <h1 className="text-7xl font-heading">
          {service.question}
        </h1>

        {service.answer}
      </div>
    </main>
  );
}