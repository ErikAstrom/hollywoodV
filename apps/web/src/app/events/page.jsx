import sanityClient from '../../sanity/config'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

export default async function Events() {

    const builder = imageUrlBuilder(sanityClient)
    
    function urlFor(source) {
      return builder.image(source)
    }
    const data = await sanityClient.fetch(`*[_type == "event"]`);
    // console.log(data[0].slug.current)
    return (
  <div className=' flex flex-col mb-20'> 
        <Link href='/'>Back</Link>
    <div className=' w-[80%] grid grid-cols-3 gap-2 mx-auto mt-10'>
         {data.map((item,i) => {
            return <div key={i} className='flex flex-col text-zinc-900 border-2 border-zinc-900 rounded'>
            <img className='h-[200px]' src={urlFor(item.image).url()} />
                <div  className='p-5'>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <p className='text-lg'>{item.description}</p>
                <Link className='pl-5 hover:font-bold' href={`/events/${item.slug?.current}`}> -{'>'} Go to event</Link>
                </div>
            </div>
         })}   
    </div> 
  </div>
    )
  }
  