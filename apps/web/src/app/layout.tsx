import '../styles/globals.css';
import sanityClient from '../sanity/config'
import Header from '../sections/header';
import Footer from '../sections/layout/footer/Index';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const data = await sanityClient.fetch(`*[_type == "config"]`);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
