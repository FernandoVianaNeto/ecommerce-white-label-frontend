import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0px 135px;
  padding: 23px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #D9D9D9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.button};
  border: none;
  padding: 0px 60px;
  cursor: pointer;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.family};
  position: relative;
`;

export const ButtonText = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: ${({ theme }) => theme.colors.button};
    transition: width 0.3s ease;
  }

  ${Button}:hover &::after {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-family: 'Palanquin Dark', sans-serif;
  padding: 13px 7px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Img = styled.img`
  margin-left: 5px;
`;

export const CartCardContainer = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 320px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #ccc;
    padding: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;

    &.cart-card {
    }
`;

export const CartWrapper = styled.div`
  position: relative;

  &:hover .cart-card {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.button};
  border: 1px solid #A0A0A0;
  cursor: pointer;
  padding: 15px 23px 15px 23px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.family};
  position: relative;
`;

export const CartTitle = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: 18px;
  font-weight: 400;
`;

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0px 8px 0px;
`;

export const TotalWrapper = styled.p`
  color: #000;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
`;

export const BlockWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 8px 0px 8px 0px;
`;