import styled from 'styled-components';
import Link from 'next/link';
import useNav from '../../hooks/useNav';
import { mediaQueries } from '../../utils/configuration';

const Wrapper = styled.nav`
  display: none;
  @media (min-width: ${mediaQueries.ipadPro}) {
    margin-top: 2rem;
    padding: 1rem 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
`;
const DesktopLinks = () => {
  const { links } = useNav();

  return (
    <Wrapper>
      <Link href={'/'}>
        <a>HOME</a>
      </Link>
      {links.map((link) => {
        return (
          <Link href={`/category/${link}`} key={link}>
            <a>{link.toUpperCase()}</a>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default DesktopLinks;
