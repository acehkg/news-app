import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

const Image = ({ src, alt }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return <img src={urlFor(src).auto('format').url()} alt={alt} />;
};

export default Image;
