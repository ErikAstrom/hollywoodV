import Image from "next/image";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { CgSweden } from "react-icons/cg"
import sanityClient from "../../../sanity/config";
/* @ts-expect-error Server Component */

export default async function Footer(): JSX.Element {
  const data = await sanityClient.fetch(`*[_type == "config"] {
        footerlogo {
          alt,
          asset -> {
           url,
           },
        },
          footerlinks[] {
            linkText,
            type,
            internalLink-> {
            _type,
            slug {
            _type,
            current
          }
          }
          }
        }`);

  const { footerlinks = [], footerlogo = {} } = data[0];

  return (
    <footer className="bg-blackDiamond w-full">
      <div className="spacing text-ivory mx-auto flex w-full flex-col justify-between text-bodyMobile">
        <div className="mb-[16px] h-[80px] w-[300px]">
          <Image
            src={footerlogo.asset.url}
            width={300}
            height={80}
            alt="hollywood-V logo"
          />
        </div>
        <hr className="my-[16px] h-[1px] w-full bg-white text-white" />

        <div className="flex w-full flex-col md:flex-row justify-between my-[24px]">
          <div className="flex h-[160px] w-full md:w-[300px] flex-col justify-between mb-[32px] md:mb-0">
            {footerlinks.map((link, i) => {
                return <div key={i} className="w-full justify-between flex">{link.linkText} <BsArrowRight/></div>
            })}
          </div>

          <div className="flex md:w-[300px] w-full flex-col items-center md:items-left">
            <div className="flex items-center">
              <AiOutlineMail size={24} className="mr-[5px]" />
              info@hollywoodv.eu
            </div>
            <div className="flex mt-[32px]">
              <AiOutlineInstagram size={24} className="mr-[5px]" />
              <AiOutlineFacebook size={24}className="mr-[5px]" />
              <AiOutlineLinkedin size={24}/>
            </div>
          </div>
        </div>
        <hr className="my-[16px] h-[1px] w-full bg-white text-white" />
        <div className="mx-auto text-center flex flex-col">
            <p>HollywoodV Music business 2022</p>
            <p className="py-[16px]">Org:19276 01</p>
            <p className="flex items-center w-full justify-center"><CgSweden size={24} className="mr-[5px]"/>Stockholm, Sweden</p>
        </div>
      </div>
    </footer>
  );
}
