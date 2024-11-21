import { getButtonStyle } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
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
