import Image from 'next/image'
import instagram1 from '../../../public/img/kg/instagram-1.png'
import instagram2 from '../../../public/img/kg/instagram-2.png'
import instagram3 from '../../../public/img/kg/instagram-3.png'


export const Instagram = () => {
  return (
    <div className='mxd-container grid-container'>
      <div className="flex">
        <div className='w-6/12'>
          <div className="text-7xl font-heading">We're highly <br />(almost incurably) social!</div>
        </div>
        <div className='w-6/12'>
          <div className="text-5xl font-body">Follow us for behind-the-scenes production, service spotlights, and proof that print isn't dead it's just getting better.</div>
        </div>
      </div>  
      <div className="pt-20 ">
        <div className="flex gap-5">
          <Image src={instagram1} alt="Instagram" />
          <Image src={instagram2} alt="Instagram" />
          <Image src={instagram3} alt="Instagram" />
        </div>
      </div>  
    </div>
  )
}

export default Instagram