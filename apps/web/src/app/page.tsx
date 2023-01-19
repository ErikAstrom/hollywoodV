import sanityClient from "../sanity/config";
import Link from "next/link";
import Hero from "../sections/hero";
import Services from "../sections/services";
import Preview from "../sections/preview";
import LogoSection from "../sections/logosSection";
import Contact from "../sections/contactSection";
import QuoteSection from "../sections/quoteSection";

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
       },
       _type == "preview" => {
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
      _type == "logos" => { 
        backgroundColor,
        title,
        logoArray[] {
          alt,
          asset -> {
            url
           }
        }
      },
      _type == "contact" => {
        title,
        label,
        description
      },
      _type == "quotes" => { 
        title,
        backgroundColor,
        quoteArray[] {
          quoteauthor,
          quotetext,
        }
        
        }
      },
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
          ) : section._type === "preview" ? (
            <Preview section={section} key={i} />
          ) : section._type === "logos" ? (
            <LogoSection section={section} key={i} />
          ) : section._type === "contact" ? (
            <Contact section={section} key={i} />
          ) : section._type === "quotes" ? (
            <QuoteSection section={section} key={i} />
          ) : null;
        })}
    </main>
  );
}
