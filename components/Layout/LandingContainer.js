import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: calc(100% - ${(props) => props.height});
`;

const LandingContainer = ({ children, navHeight }) => {
  return <Wrapper height={navHeight}>{children}</Wrapper>;
};

export default LandingContainer;
