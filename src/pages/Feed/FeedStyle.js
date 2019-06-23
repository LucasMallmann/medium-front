import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Loading = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #008e00;
    font-size: 24px;
  }
`;
