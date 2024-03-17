/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
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
    bottom: 10px;
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

const ExternalLinks = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/external-links');
        const data = await response.json();
        setMenuItems(data.data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      }
    };

    fetchMenuItems();

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
            href={item.attributes.URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="grey"
            size="small"
            css={css`margin-right: 10px;`}
          >
            {item.attributes.Title}
          </Link>
        ))}
      </nav>
      <span className={`arrow ${isAtBottom ? 'arrowUp' : 'arrowDown'}`} onClick={isAtBottom ? scrollToTop : scrollToBottom}></span>
    </div>
  );
};

export default ExternalLinks;
