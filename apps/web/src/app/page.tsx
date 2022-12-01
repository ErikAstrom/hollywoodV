import sanityClient from "../sanity/config"
import Link from "next/link"
import Hero from "./hero";

export default async function Home() {
    const data = await sanityClient.fetch(`*[_type == "page" && slug.current == "startsida"]`);

    const { sections } = data[0];

    return (
  <main> 
    {sections && sections.map((section, i) => {
      return (
        section.type = 'hero' && <Hero data={section} key={i}/>
      )
    })}
  </main>
    )
  }
  