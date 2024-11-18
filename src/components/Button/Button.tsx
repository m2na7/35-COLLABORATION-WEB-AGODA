import { getButtonStyle } from './Button.style';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'filled' | 'outlined'; 
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  variant = 'filled',
  disabled = false,
}: ButtonProps) => {
  const buttonStyle = getButtonStyle(variant, disabled);

  return (
    <button onClick={onClick} disabled={disabled} css={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
