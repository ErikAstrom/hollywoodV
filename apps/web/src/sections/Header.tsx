import sanityClient from '../sanity/config'
import { urlFor } from '../lib/helpers'
import Image from 'next/image';
import Hamburger from './header/Hamburger';


{/* @ts-expect-error Server Component */}
export default async function Header():JSX.Element {

    const data = await sanityClient.fetch(`*[_type == "config"] {
        headerLogo,
        links
    }`);

    const { headerLogo, links } = data[0];






    return (
    <nav className="h-[56px] bg-blackDiamond fixed w-full flex items-center">
        <div className='spacing flex justify-between items-center'>
            <div className='w-[168px] h-[32px] border-2 border-color-white flex items-center justify-center text-white'>Contact us</div>
            <Image width={25} height={25} src={urlFor(headerLogo).width(50).url()} alt={headerLogo.alt}/>
            <Hamburger/>    
        </div>
    </nav>
    )
}

