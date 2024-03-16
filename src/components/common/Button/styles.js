import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  /* Size-based styles */
  padding: ${({ theme, size }) => theme.buttonSizes[size].padding};
  font-size: ${({ theme, size }) => theme.buttonSizes[size].fontSize};

  /* Variant-based styles */
  background-color: ${({ theme, variant }) => theme.buttonVariants[variant].background};
  color: ${({ theme, variant }) => theme.buttonVariants[variant].color};
  border: ${({ theme, variant }) => theme.buttonVariants[variant].border || 'none'};

  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ theme, variant }) => theme.buttonVariants[variant].hoverBackground};
    color: ${({ theme, variant }) => theme.buttonVariants[variant].hoverColor};
    border-color: ${({ theme, variant }) => theme.buttonVariants[variant].hoverBorder || 'transparent'};
  }
`;
