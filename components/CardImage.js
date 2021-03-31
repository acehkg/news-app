import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

const CardImage = ({ src, alt }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <img
      src={urlFor(src).width(500).fit('min').auto('format').url()}
      alt={alt}
    />
  );
};

export default CardImage;
