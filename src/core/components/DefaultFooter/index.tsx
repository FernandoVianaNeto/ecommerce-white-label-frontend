import { Footer, FooterBlock, FooterButton, FooterText } from "./styles";

const DefaultFooter = () => {
    return (
        <Footer>
          <FooterBlock>
            <FooterText color="#000" fontSize='12px' fontWeight="600">Logo+</FooterText>
            <FooterText color="#5E5E5E" fontSize='12px' marginTop='10px'>125, Fifth Street</FooterText>
            <FooterText color="#5E5E5E" fontSize='12px' marginTop='10px'>Brooklyn, NY, US</FooterText>
            <FooterButton color="#000" fontSize='12px' marginTop='10px'>Contact Us</FooterButton>
          </FooterBlock>
          <FooterBlock marginLeft='50px'>
            <FooterText color="#000" fontSize='12px' fontWeight="600">CUSTOMER CARE</FooterText>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='20px'>FAQs</FooterButton>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='10px'>Orders & Returns</FooterButton>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='10px'>Account</FooterButton>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='10px'>About Us</FooterButton>
          </FooterBlock>
          <FooterBlock marginLeft='50px'>
            <FooterText color="#000" fontSize='12px' fontWeight="600">CONNECT</FooterText>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='20px'>Instagram</FooterButton>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='10px'>Facebook</FooterButton>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='10px'>Twitter</FooterButton>
            <FooterButton color="#5E5E5E" fontSize='12px' marginTop='10px'>Pinterest</FooterButton>
          </FooterBlock>
        </Footer>
    );
};
  
  export default DefaultFooter;