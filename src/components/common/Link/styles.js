import styled from '@emotion/styled';

export const LinkWrapper = styled.a`
  /* Size-based styles */
  font-size: ${({ theme, size }) => theme.linkSizes[size].fontSize};

  /* Variant-based styles */
  color: ${({ theme, variant }) => theme.linkVariants[variant].color};

  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme, variant }) => theme.linkVariants[variant].hoverColor};
  }
`;
