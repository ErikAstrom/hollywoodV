import sanityClient from '../../../sanity/config'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

export default async function Event({ params }) {
    const data = await sanityClient.fetch(`*[_type == "event" && slug.current == "${params.id}"]`);
    console.log(data)
    const event = data[0];
    
    return (
        <div>
            <h2 className='font-bold text-2xl'>{event.title}</h2>
            <Link href='/events'>Go Back</Link>
        </div>
    )
    }