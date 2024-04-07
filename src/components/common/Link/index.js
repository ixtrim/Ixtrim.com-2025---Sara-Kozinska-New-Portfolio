import React from 'react';
import { LinkWrapper } from './styles';

const Link = ({ children, href, target, rel, title, variant, size, className }) => {
  return (
    <LinkWrapper href={href} target={target} rel={rel} title={title} variant={variant} size={size} className={`regular-link ${className}`}>
      {children}
    </LinkWrapper>
  );
};

export default Link;
