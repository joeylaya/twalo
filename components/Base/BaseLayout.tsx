import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact/src/index";
import { Footer } from "./Footer.tsx";
import { NavBar } from "./NavBar.tsx";

interface BaseLayoutProps {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    image: {
      id: string
      altText: string
      url: string
    };
  };
  children: JSX.Element;
}

export default function BaseLayout(props: BaseLayoutProps) {
  const { title, description, keywords, image } = props.seo;
  return (
    <>
      <Head>
        {/* Title */}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        {/* Description */}
        <meta name="description" content={description} />
        <meta property='og:description'  content={description} />
        <meta name='twitter:description' content={description} />
        {/* Image */}
        <meta property="og:image"  content={image.url} />
        <meta name="twitter:image" content={image.url} />
        {/* Keywords */}
        <meta name="keywords" content={keywords.join(", ")} />
        {/* Links */}
        <link rel="stylesheet" href="/main.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <NavBar />
        <main class="hero flex flex-col items-center px-4 pt-24 pb-8 md:(px-16 pt-32 pb-4)">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
