/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '../../../theme';
import Link from '../../../components/common/Link';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import imgArrowDownWhite from '../../../assets/images/icons__arrow-down--white.svg';
import imgArrowDownOrange from '../../../assets/images/icons__arrow-down--orange.svg';

// Register the GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const componentStyles = css`
  position: fixed;
  top: 0;
  right: 100px;
  width: 20px;
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.dark};
    z-index: -1;
    opacity: 0.55;
    border-left: 1px solid ${theme.colors.darkgrey};
    border-right: 1px solid ${theme.colors.darkgrey};
  }

  nav {
    margin: 0;
    transform: rotate(90deg) translateX(51%);
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    position: absolute;
    top: 0px;

    a {
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  .arrow {
    position: absolute;
    bottom: 20px;
    left: 6px;
    z-index: 1;
    cursor: pointer;
    background-image: url(${imgArrowDownWhite});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    width: 10px;
    height: 13px;
    transition: transform 0.3s ease-in-out;

    &.arrowUp {
      transform: rotate(-180deg);
    }
    
    &:hover {
      background-image: url(${imgArrowDownOrange});
    }
  }
`;

const menuItems = [
  { id: 1, name: 'Linked In', URL: 'https://www.linkedin.com/in/sara-kozinska/' },
  { id: 2, name: 'GitHub', URL: 'https://github.com/ixtrim' },
  { id: 3, name: 'GitLab', URL: 'https://gitlab.com/ixtrim' },
  { id: 4, name: 'Hacker Rank', URL: 'https://www.hackerrank.com/' },
  { id: 5, name: 'Leet Code', URL: 'https://leetcode.com/' },
];

const ExternalLinks = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  };

  const scrollToBottom = () => {
    gsap.to(window, { duration: 1, scrollTo: document.body.scrollHeight });
  };

  return (
    <div css={componentStyles}>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="grey"
            size="small"
            css={css`margin-right: 10px;`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <span className={`regular-link arrow ${isAtBottom ? 'arrowUp' : 'arrowDown'}`} onClick={isAtBottom ? scrollToTop : scrollToBottom}></span>
    </div>
  );
};

export default ExternalLinks;
