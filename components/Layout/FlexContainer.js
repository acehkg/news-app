import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const FlexContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FlexContainer;
