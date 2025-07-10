import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0px;
`;

export const InlineWrapper = styled.div<{
  padding?: string;
}>`
  padding: ${({ padding }) => padding ?? '16px'};
  display: flex;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  padding: 0px 135px;
`;

export const Text = styled.span<{
  color: string;
  fontSize?: string;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 275px); /* largura fixa dos cards */
  justify-content: space-between;
  gap: 24px;
  margin-top: 22px;
  width: 100%;
`;
