import groq from 'groq';
import sanityClient from '../../client';
import Post from '../../components/Blog/Post';

const Page = ({ data }) => {
  return <Post data={data} />;
};

export default Page;

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    body,
    mainImage,
    categories,
    publishedAt,
    "slug": slug.current,
    "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
  }
`;
export async function getStaticPaths() {
  // Get slugs and create paths
  const result = await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  const paths = result.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch blog post from Sanity
  const post = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      data: { post },
    },
  };
}
