import sanityClient from "../sanity/config";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient)
    
export function urlFor(source) {
  return builder.image(source)
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const getLinkPath = (link) => {
  if (link?.type === 'internal') {
    return `${link?.internalLink?._type}/${link.internalLink.slug.current}`
}
else return link?.externalLink;

}