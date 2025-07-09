import { StyledButton } from "./styles";

type ButtonProps = {
    backgroundColor?: string;
    borderColor?: string;
    color: string;
    children: React.ReactNode;
  };
  

const ButtonCheckout = ({ backgroundColor, borderColor, color, children }: ButtonProps) => {
    return (
      <StyledButton backgroundColor={backgroundColor ?? 'none'} borderColor={borderColor} color={color}>
        {children}
      </StyledButton>
    );
  };
  
  export default ButtonCheckout;