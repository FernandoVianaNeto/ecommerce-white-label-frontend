import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 275px;
`;

export const Img = styled.img`
  width: 275px;
  height: 352px;
`;

export const Text = styled.p<{ 
  color?: string; 
  fontSize?: string 
}>`
  color: ${(props) => props.color || '#5E5E5E'};
  font-size: ${(props) => props.fontSize || '15px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin-top: 4px;
  line-height: 25px;
`;