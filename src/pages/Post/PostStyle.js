import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  margin: 3rem auto;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-family: 'Lora', serif;
    color: #272a2b;
    font-size: 32px;
    text-transform: capitalize;
  }
  p {
    font-family: 'Lora', serif;
    margin: 1rem 0;
    font-size: 24px;
    color: #757575;
  }

  img {
    width: auto;
    height: 400px;
    max-height: 400px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    small {
      font-size: 12px;
      color: #757575;
    }

    span {
      font-size: 14px;
      color: #424242;
      text-transform: capitalize;

      small {
        color: #008e00;
        margin-left: 12px;
        border: 1px solid #008e00;
        padding: 0 4px;
        border-radius: 4px;
        width: 50px;
        display: inline-block;
        text-align: center;
        font-size: 13px;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }
  }
`;

export const MarkdownContainer = styled.div`
  font-family: 'Lora', serif;
  color: #272a2b;

  p {
    font-size: 20px;
    line-height: 30px;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const ClapContainer = styled.div`
  position: fixed;
  left: 120px;
  top: 40%;
`;

export const Loading = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #008e00;
    font-size: 24px;
  }
`;
