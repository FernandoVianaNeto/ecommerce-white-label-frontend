import styled from 'styled-components';

export const StyledButton = styled.button<{
  backgroundColor: string;
  borderColor?: string;
  color: string;
}>`
  background-color: ${({ backgroundColor, theme }) => backgroundColor ?? theme.colors.white};
  color: ${({ color }) => color};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : 'none'};
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 500;
  margin-top: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
