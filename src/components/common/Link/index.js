import React from 'react';
import { LinkWrapper } from './styles';

const Link = ({ children, href, target, rel, title, variant, size }) => {
  return (
    <LinkWrapper href={href} target={target} rel={rel} title={title} variant={variant} size={size}>
      {children}
    </LinkWrapper>
  );
};

export default Link;
