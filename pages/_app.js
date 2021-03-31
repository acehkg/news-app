// Global styles and font
import Font from '../style/Font';
import GlobalStyles from '../style/GlobalStyles';
//Layout Components
import Header from '../components/Header/Header';
import Slider from '../components/Header/Slider';

//Context for navbar state on mobile
import NavOpenProvider from '../context/MenuContext';
import styled from 'styled-components';
import useNav from '../hooks/useNav';

const Wrapper = styled.div`
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.open ? 'translateX(-50%) ' : 'revert')};
`;
const GlobalWrapper = ({ children }) => {
  const { open } = useNav();
  return <Wrapper open={open}>{children}</Wrapper>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavOpenProvider>
        <Slider />
        <GlobalWrapper>
          <Header title='Daily News' />
          <Component {...pageProps} />
        </GlobalWrapper>
      </NavOpenProvider>
      <GlobalStyles />
      <Font />
    </>
  );
}
export default MyApp;
