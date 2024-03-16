import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, variant = 'outlined', size = 'medium', onClick }) => {
  return (
    <ButtonWrapper variant={variant} size={size} onClick={onClick}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
