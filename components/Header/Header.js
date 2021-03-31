import styled from 'styled-components';
import Burger from './Burger';

import DesktopLinks from './DesktopLinks';
import { mediaQueries } from '../../utils/configuration';

const Head = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;

  @media (min-width: ${mediaQueries.ipadPro}) {
    flex-direction: column;
  }
`;

const LogoTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const Header = ({ title }) => {
  return (
    <Head>
      <LogoTitle>{title}</LogoTitle>
      <DesktopLinks />
      <Burger />
    </Head>
  );
};

export default Header;
