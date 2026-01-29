import Image from 'next/image'
import Link from 'next/link'
import {contentData} from '@/lib/courseData';

const Hero = () => {
  return (
    <div className='flex min-h-[80] flex-col-reverse lg:flex-row'>
      <div className='flex-1 p-10 flex flex-col item-center justify-center'>
        <h2 className='text-5xl font-bold mb-4'>{contentData.hero.headline}</h2>
        <h3>{contentData.hero.subheadline}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vitae iste nulla officia amet quaerat esse labore! Animi, sunt tempora!</p>
      <Link href="/booking" className='btn-green w-40 my-4'>Jelentkezés</Link>
      </div>
      <div className='flex-1 mt-10'>
        <Image src="/hero.png" width={1000} height={1000} alt='Emma pic' className='w-full'/>
      </div>
    </div>
  )
}

export default Hero