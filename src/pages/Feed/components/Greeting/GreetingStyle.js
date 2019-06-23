import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  background: #fafafa;

  img {
    width: 150px;
    height: 130px;
  }

  div {
    margin-left: 20px;
    p {
      margin: 0;
      color: #262626;
      margin-top: 5px;
      font-size: 18px;
    }

    h1 {
      margin: 0;
      font-family: 'Lora', serif;
      color: #272a2b;
      font-size: 32px;
    }
  }
`;
