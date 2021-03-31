import groq from 'groq';
import sanityClient from '../client';
import GridContainer from '../components/Layout/GridContainer';
import FeatureCard from '../components/Blog/FeatureCard';
import BlogCard from '../components/Blog/BlogCard';
import PageSeo from '../components/PageSeo';

const meta = {
  title: 'Daily News',
  description: 'News or Blog App Demo Created with Next JS and Sanity',
};

const FeaturedPost = ({ data }) => {
  return <FeatureCard post={data.post[0]} />;
};
const NewPosts = ({ data }) => {
  const remaining = data.post.slice(1);
  return (
    <>
      <GridContainer>
        {remaining.map((item) => {
          return <BlogCard key={item._id} post={item} />;
        })}
      </GridContainer>
    </>
  );
};

const HomePage = ({ data }) => {
  return (
    <>
      <PageSeo meta={meta} />
      <FeaturedPost data={data} />
      <NewPosts data={data} />
    </>
  );
};

const postQuery = groq`
*[_type == "post" && publishedAt < now()]|order(publishedAt desc)[0...10]{
  _id,
    title,
    excerpt,
    mainImage,
    publishedAt,
    "slug": slug.current,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image}
`;
export async function getStaticProps() {
  // Fetch blog posts from Sanity IO
  const post = await sanityClient.fetch(postQuery);

  return {
    props: {
      data: { post },
    },
  };
}

export default HomePage;
