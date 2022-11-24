import sanityClient from "../sanity/config"
import Link from "next/link"
export default async function Home() {
    // const data = await sanityClient.fetch(`*[]`);
    return (
  <div> 
    <div className='text-xl'>Hello home</div> 
        <Link className='m-10' href={'/events'}>Events</Link>
  </div>
    )
  }
  