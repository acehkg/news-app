import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  justify-items: center;
  width: 80%;
  margin: 0 auto;
`;

const GridContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GridContainer;
