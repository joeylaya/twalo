import { Head } from "$fresh/runtime.ts";
import { Footer } from "./Footer.tsx";
import { NavBar } from "./NavBar.tsx";

interface BaseLayoutProps {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  children: any;
}

export default function BaseLayout(props: BaseLayoutProps) {
  const { title, description, keywords } = props.seo;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
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
        <main class="flex flex-col items-center px-8 pt-24 pb-8 md:(px-16 pt-32 pb-4)">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
