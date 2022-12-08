import sanityClient from "../sanity/config"
import Link from "next/link"
import Hero from '../sections/hero'

export default async function Home() {
    const data = await sanityClient.fetch(`*[_type == "page" && slug.current == "startsida"]{
      slug,
      pageMeta {
        description,
        title,
      },
      sections[] {
        _type,
        _type == "hero" => {
          title,
          label,
          description,
          background,
          video,
          image {
            alt,
            asset -> {
              url,
            }
          },
          video{
            ...,
            asset->{
                url,
            }
          }, 
          btn1 {
            ...,
          },
          btn2 {
            ...,
          }
        }
      }
    }`);

    const { sections } = data[0];

    return (
  <main> 
    {sections && sections.map((section, i) => {
      return (
        section.type = 'hero' && <Hero section={section} key={i}/>
      )
    })}
  </main>
    )
  }
  