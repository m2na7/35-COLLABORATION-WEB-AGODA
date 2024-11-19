import { css } from '@emotion/react';
import theme from '@/styles/theme'; 

type ButtonVariant = 'filled' | 'outlined';

const baseButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  gap: 1rem;
  border-radius: 4px;
`;

const filledButtonStyle = (disabled: boolean) => css`
  ${baseButtonStyle}
  ${theme.font.title5_b_16}
  border: none;
  background-color: ${disabled ? '#DBDADF' : theme.color.blue300};
  color: ${theme.color.white};
  cursor: ${disabled ? 'default' : 'pointer'}; 
`;

const outlinedButtonStyle = () => css`
  ${baseButtonStyle}
  ${theme.font.title6_b_14}
  border: 1px solid ${theme.color.blue300}; 
  background-color: ${theme.color.white}; 
  color: ${theme.color.blue300}; 
  cursor: pointer;
`;


export const getButtonStyle = (variant: ButtonVariant, disabled: boolean) => {
  return variant === 'filled' ? filledButtonStyle(disabled) : outlinedButtonStyle();
};
