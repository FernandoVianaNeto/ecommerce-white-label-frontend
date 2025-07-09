import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    padding-left: 131px;
    padding: 12px 0px 8px 0px;
    background: ${({ theme }) => theme.colors.highlighBackground};
`;

export const Text = styled.text`
    color: #000;
    font-family: ${({ theme }) => theme.font.family};
    font-size: 14px;
    font-style: bold;
    font-weight: 400;
    line-height: 18px; /* 150% */
`;