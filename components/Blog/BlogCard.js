import Link from 'next/link';
import styled from 'styled-components';
import CardImage from '../CardImage';
import { ArrowRight } from 'react-feather';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ImageWrapper = styled.div`
  img {
    border-radius: var(--photo-radius);
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Description = styled.p``;
const BlogCard = ({ post }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <CardImage src={post.mainImage} alt={post.title} />
      </ImageWrapper>
      <Title>{post.title}</Title>
      <Description>{post.excerpt}</Description>
      <Link href={`/posts/${post.slug}`}>
        <LinkWrapper>
          <a>Read Post</a>
          <ArrowRight size={32} stroke={2} fill={'var(--primary-color)'} />
        </LinkWrapper>
      </Link>
    </CardWrapper>
  );
};

export default BlogCard;
