import Document,{Html, Head, Main, NextScript} from "next/document"

const _document = () => {
  return (
    <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <Main/>
        <NextScript/>
    </Html>
  )
}

export default _document