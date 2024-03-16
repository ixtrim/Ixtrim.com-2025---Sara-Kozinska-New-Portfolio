import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  padding: ${({ theme, size }) => theme.buttonSizes[size].padding};
  font-size: ${({ theme, size }) => theme.buttonSizes[size].fontSize};
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme, variant }) => theme.colors[`${variant}Dark`] || theme.colors[variant]};
  }
`;
