import groq from 'groq';
import sanityClient from '../../client';
import GridContainer from '../../components/Layout/GridContainer';
import FeatureCard from '../../components/Blog/FeatureCard';
import BlogCard from '../../components/Blog/BlogCard';
import PageSeo from '../../components/PageSeo';

const FeaturedPost = ({ data }) => {
  return <FeatureCard post={data.post[0].posts[0]} />;
};
const NewPosts = ({ data }) => {
  const remaining = data.post[0].posts.slice(1);
  if (remaining.length >= 2) {
    return (
      <>
        <GridContainer>
          {remaining.map((item) => {
            return <BlogCard key={item._id} post={item} />;
          })}
        </GridContainer>
      </>
    );
  } else {
    return <></>;
  }
};

const CategoryPage = ({ data }) => {
  const meta = {
    title: data.post[0].title,
    description: data.post[0].description,
  };
  return (
    <>
      <PageSeo meta={meta} />
      <FeaturedPost data={data} />
      <NewPosts data={data} />
    </>
  );
};

export default CategoryPage;

const postQuery = groq`

*[_type == "category" && slug.current==$category]{_id,title,description,
'posts':*[_type == "post" && references(^._id)]{
    _id,
    title,
    excerpt,
    body,
    mainImage,
    publishedAt,
    "slug": slug.current,
    "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
}
}
  
`;
export async function getStaticPaths() {
  // Get slugs and create paths
  const result = await sanityClient.fetch(
    groq`*[_type == "category" && defined(slug.current)][].slug.current`
  );

  const paths = result.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch blog post from Sanity
  const post = await sanityClient.fetch(postQuery, {
    category: params.category,
  });

  return {
    props: {
      data: { post },
    },
  };
}
