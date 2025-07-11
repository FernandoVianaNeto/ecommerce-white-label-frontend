import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  padding: 58px 135px 58px 135px;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.highlighBackground};
`;

export const FooterBlock = styled.div<{
  marginLeft?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: ${({ marginLeft }) => marginLeft ?? '0px'};
  height: 100%;
`;

export const FooterButton = styled.button<{
  color: string;
  fontSize?: string;
  marginTop?: string;
  fontWeight?: string;
}>`
  font-weight: ${({ fontWeight }) => fontWeight ?? '400'};
  margin-top: ${({ marginTop }) => marginTop ?? '0px'};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0px;
  align-items: left;
  display: flex;
`;

export const FooterText = styled.span<{
    color: string;
    fontSize?: string;
    marginTop?: string;
    fontWeight?: string;
  }>`
    font-weight: ${({ fontWeight }) => fontWeight ?? '400'};
    margin-top: ${({ marginTop }) => marginTop ?? '0px'};
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize ?? '16px'};
    background: 'none';
    border: 'none';
    padding: 0px;
  `;