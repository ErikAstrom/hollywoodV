

import {createClient} from 'next-sanity'

const sanityClient = createClient({
    projectId: '6p2x2g8a',
    dataset: 'production',
    apiVersion: '2021-10-21', // use a UTC date string
  //   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})


export default sanityClient;
  