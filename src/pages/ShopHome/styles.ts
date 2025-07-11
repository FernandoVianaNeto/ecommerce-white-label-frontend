import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0px;
  min-height: 100vh;
`;

export const InlineWrapper = styled.div<{
  padding?: string;
}>`
  padding: ${({ padding }) => padding ?? '16px'};
  display: flex;
  justify-content: center;
  padding: 16px 135px;
`;

export const GridWrapper = styled.div`
  display: grid;
`;

export const Text = styled.span<{
  color: string;
  fontSize?: string;
  marginTop?: string;
  marginLeft?: string;
  fontWeight?: string;
}>`
  font-weight: ${({ fontWeight }) => fontWeight ?? '400'};
  margin-top: ${({ marginTop }) => marginTop ?? '0px'};
  margin-left: ${({ marginLeft }) => marginLeft ?? '0px'};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 275px);
  justify-content: space-between;
  gap: 24px;
  margin-top: 22px;
  width: 100%;
  padding: 0 135px;
`;

