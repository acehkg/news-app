import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;

  img {
    height: 100%;
    width: 100%;
  }
`;
const Logo = ({ src, alt }) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};
export default Logo;
