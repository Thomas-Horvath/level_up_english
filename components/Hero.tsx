import Image from 'next/image'
import Link from 'next/link'
import { contentData } from '@/lib/courseData';

const Hero = () => {
  return (
    <div className='min-h-[80] flex-col-reverse lg:flex-row flex lg:mt-20'>
      <div className='flex-1 p-10 flex flex-col item-center justify-center'>
        <h2 className='text-5xl font-bold mb-4'>{contentData.hero.headline}</h2>
        <h3 className='text-2xl mb-4 font-semibold'>{contentData.hero.subheadline}</h3>
        <p>{contentData.hero.description}</p>
        <div className='flex lg:gap-4 flex-col lg:flex-row'>

          <Link href={contentData.hero.primaryCta.target} className='btn-green w-full lg:w-fit my-4 '>{contentData.hero.primaryCta.label}</Link>
          <Link href={contentData.hero.secondaryCta.target} className='btn-soft w-full lg:w-fit my-4'>{contentData.hero.secondaryCta.label}</Link>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <Image src="/hero.png" width={1000} height={1000} alt='Emma pic' />
      </div>
    </div>
  )
}

export default Hero;