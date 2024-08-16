import path from '@/public/techicons/path.json'
import Image from 'next/image'

const TechMarquee = () => {
  return (
    <div className='flex overflow-x-hidden space-x-40 group py-4'>
    <div className='flex space-x-40 whitespace-nowrap animate-marquee group-hover:paused'>
        <Image className='max-w-none' src={path.java} alt='java' height={48} width={48} />
        <Image className='max-w-none' src={path.laravel} alt='laravel' height={48} width={48} />
        <Image className='max-w-none' src={path.mysql} alt='mysql' height={48} width={48} />
        <Image className='max-w-none' src={path.nextjs} alt='nextjs' height={48} width={48} />
        <Image className='max-w-none' src={path.tensorflow} alt='tensorflow' height={48} width={48} />
        <Image className='max-w-none' src={path.aws} alt='aws' height={48} width={48} />
        <Image className='max-w-none' src={path.docker} alt='docker' height={48} width={48} />
        {/* <Image className='max-w-none' src={path.flutter} alt='flutter' height={48} width={48} />
        <Image className='max-w-none' src={path.linux} alt='linux' height={48} width={48} />
        <Image className='max-w-none' src={path.wireshark} alt='wireshark' height={48} width={48} /> */}
    </div>
    <div className='flex space-x-40 whitespace-nowrap animate-marquee group-hover:paused' aria-hidden="true">
        <Image className='max-w-none' src={path.java} alt='java' height={48} width={48} />
        <Image className='max-w-none' src={path.laravel} alt='laravel' height={48} width={48} />
        <Image className='max-w-none' src={path.mysql} alt='mysql' height={48} width={48} />
        <Image className='max-w-none' src={path.nextjs} alt='nextjs' height={48} width={48} />
        <Image className='max-w-none' src={path.tensorflow} alt='tensorflow' height={48} width={48} />
        <Image className='max-w-none' src={path.aws} alt='aws' height={48} width={48} />
        <Image className='max-w-none' src={path.docker} alt='docker' height={48} width={48} />
        {/* <Image className='max-w-none' src={path.flutter} alt='flutter' height={48} width={48} />
        <Image className='max-w-none' src={path.linux} alt='linux' height={48} width={48} />
        <Image className='max-w-none' src={path.wireshark} alt='wireshark' height={48} width={48} /> */}
    </div>
    <div className='flex space-x-40 whitespace-nowrap animate-marquee group-hover:paused' aria-hidden="true">
        <Image className='max-w-none' src={path.java} alt='java' height={48} width={48} />
        <Image className='max-w-none' src={path.laravel} alt='laravel' height={48} width={48} />
        <Image className='max-w-none' src={path.mysql} alt='mysql' height={48} width={48} />
        <Image className='max-w-none' src={path.nextjs} alt='nextjs' height={48} width={48} />
        <Image className='max-w-none' src={path.tensorflow} alt='tensorflow' height={48} width={48} />
        <Image className='max-w-none' src={path.aws} alt='aws' height={48} width={48} />
        <Image className='max-w-none' src={path.docker} alt='docker' height={48} width={48} />
        {/* <Image className='max-w-none' src={path.flutter} alt='flutter' height={48} width={48} />
        <Image className='max-w-none' src={path.linux} alt='linux' height={48} width={48} />
        <Image className='max-w-none' src={path.wireshark} alt='wireshark' height={48} width={48} /> */}
    </div>
    </div>
  )
}

export default TechMarquee