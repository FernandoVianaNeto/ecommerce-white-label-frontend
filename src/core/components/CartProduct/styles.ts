import styled from "styled-components";

export const CartCard = styled.div`
    display: flex;
    border-bottom: 1px solid #D9D9D9;
    padding: 20px 0px;
`;

export const Img = styled.img`
    width: 66px;
    height: 84px;
    padding: 0px;
`;

export const DeleteButton = styled.button`
    width: 12px;
    height: 14px;
    background-color: transparent;
    cursor: pointer;
    border: none;
`;

export const InfoContainer = styled.div`
    width: 100%;
    padding-left: 13px;
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.family};
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
`;

export const Text = styled.p`
    font-family: ${({ theme }) => theme.font.family};
    font-size: 11px;
    color: #9B9B9B;
    padding: 5px 0px 0px 0px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 17px;
    background-color: ${({ theme }) => theme.colors.button};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    padding: 0px;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;