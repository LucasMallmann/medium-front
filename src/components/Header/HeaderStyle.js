import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: solid 1px #ccc;
`;

export const Container = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;

  height: 56px;

  color: rgba(0, 0, 0, 0.54);

  img {
    width: 100px;
    height: 70px;
  }

  ul {
    display: flex;
    a {
      color: rgba(0, 0, 0, 0.54);
      text-transform: capitalize;
      &:not(:last-child) {
        margin-right: 16px;
      }
      &:hover {
        color: #008e00;
      }
    }
  }
`;
