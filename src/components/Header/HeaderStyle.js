import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 10rem;

  height: 56px;
  border-bottom: solid 1px #ccc;

  color: rgba(0, 0, 0, 0.54);

  ul {
    display: flex;
    a {
      color: rgba(0, 0, 0, 0.54);
      &:not(:last-child) {
        margin-right: 16px;
      }
      &:hover {
        color: #424242;
      }
    }
  }
`;
