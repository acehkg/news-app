import Head from 'next/head';

const PageSeo = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={meta.title} />
      <meta
        name='og:description'
        property='og:description'
        content={meta.description}
      />
      <meta property='og:site_name' content='' />
      <meta property='og:url' content='' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:site' content='' />
    </Head>
  );
};

export default PageSeo;
