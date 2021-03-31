import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

const SEO = ({ post }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <Head>
      <title>{post.title}</title>
      <meta name='description' content={post.excerpt} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={post.title} />
      <meta
        name='og:description'
        property='og:description'
        content={post.excerpt}
      />
      <meta property='og:site_name' content='' />
      <meta property='og:url' content='' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={post.title} />
      <meta name='twitter:description' content={post.excerpt} />
      <meta name='twitter:site' content='' />
      <meta name='twitter:creator' content={post.name} />
      <meta
        property='og:image'
        content={urlFor(post.mainImage).auto('format').url()}
      />
      <meta
        name='twitter:image'
        content={urlFor(post.mainImage).auto('format').url()}
      />
    </Head>
  );
};

export default SEO;
