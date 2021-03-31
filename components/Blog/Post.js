import SEO from '../PostSeo';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../client';
import Image from '../Image';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';

const NewDate = ({ dateString }) => {
  const newDate = DateTime.fromISO(dateString);
  const display = newDate.toLocaleString(newDate);
  return <p>{display}</p>;
};
const Post = ({ data: { post } }) => {
  return (
    <>
      <SEO post={post} />
      <Wrapper>
        <ImageWrapper>
          <Image src={post.mainImage} alt={post.title} />
        </ImageWrapper>
        <Title>{post.title}</Title>
        <ByLine>
          <Author>{post.name}</Author>
          <NewDate dateString={post.publishedAt} />
        </ByLine>
        <ColoredLine />
        <BlockContent
          blocks={post.body}
          //imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...sanityClient.config()}
        />
        <Link href='/'>
          <LinkWrapper>
            <ArrowLeft size={32} stroke={2} fill={'var(--primary-color)'} />
            <a>All Posts</a>
          </LinkWrapper>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  p {
    line-height: 1.8;
  }
  h3 {
    padding: 1rem 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  h4 {
    padding: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--photo-radius);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const ByLine = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.25rem;
  padding-bottom: 1rem;
`;
const Author = styled.p`
  padding-right: 2rem;
`;

const ColoredLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--primary-color);
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 1rem;
  margin-left: -0.5rem;
`;

export default Post;
