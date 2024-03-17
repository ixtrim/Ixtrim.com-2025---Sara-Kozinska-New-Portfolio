import styled from '@emotion/styled';

export const LinkWrapper = styled.a`
  display: inline-block;
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;