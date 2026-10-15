import Head from "next/head";
import { useRouter } from "next/router";
import { site } from "../../data/site";

interface PageHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const PageHead: React.FC<PageHeadProps> = ({
  title,
  description = site.description,
  image = site.headshot,
}) => {
  const { asPath } = useRouter();
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const url = `${site.url}${asPath === "/" ? "" : asPath.split("#")[0]}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${image}`} />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default PageHead;
