import Head from 'next/head'
import {
  Header,
  Contact,
  InformationCards,
  Projects,
  Footer,
} from "@/components"
import ogImage from "../../public/ogImage.jpg";

export default function Home() {
  const title = "Akash: DevOps Developer";
  const description = "A DevOps Developer who falling in love with Japan";
  const url = "https://sky9262.tistory.com/";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Facebook Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}${ogImage.src}`} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
      </Head>
      <Header />
      <Contact />
      <InformationCards />
      <Projects />
      <Footer />
    </>
  )
}
