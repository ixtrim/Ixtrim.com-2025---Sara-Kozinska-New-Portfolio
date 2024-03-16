import React from 'react';
import { LinkWrapper } from './styles';

const Link = ({ children, href, target, rel, title, variant = 'white', size = 'medium' }) => {
  return (
    <LinkWrapper href={href} target={target} rel={rel} title={title} variant={variant} size={size}>
      <span>{children}</span>
    </LinkWrapper>
  );
};

export default Link;
