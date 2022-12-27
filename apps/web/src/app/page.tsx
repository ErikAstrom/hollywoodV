import sanityClient from "../sanity/config";
import Link from "next/link";
import Hero from "../sections/hero";
import Services from "../sections/services";

export default async function Home() {
  const data =
    await sanityClient.fetch(`*[_type == "page" && slug.current == "startsida"]{
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
            btnlink {
            ...,
              internalLink-> {
               _type,
               slug {
               _type,
               current
          }
          }
          }
          },
          btn2 {
            ...,
            btnlink {
            ...,
              internalLink-> {
               _type,
               slug {
               _type,
               current
          }
          }
          }
          }
        },
        _type == "services" => {
          label,
          title,
          cardArray[] -> {
            title,
            slug {
             _type,
             current
          },
                  image {
                 alt,
                 asset -> {
                   url,
                 }
               },
     
          },
       }
      }
    }`);

  const { sections } = data[0];

  return (
    <main>
      {sections &&
        sections.map((section, i) => {
          return section._type === "hero" ? (
            <Hero section={section} key={i} />
          ) : section._type === "services" ? (
            <Services section={section} key={i} />
          ) : null;
        })}
    </main>
  );
}
