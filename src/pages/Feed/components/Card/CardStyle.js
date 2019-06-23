import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
  margin: 1.5%;
`;

export const PostLink = styled(Link)`
  img {
    width: 100%;
    height: 180px;
  }

  h3 {
    color: #2f2f3f;
    text-transform: capitalize;
    margin: 8px 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: #757575;
    height: 40px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    span {
      color: #008e00;
      text-transform: capitalize;
      font-size: 13px;
    }
    small {
      font-size: 13px;
      color: #757575;
    }
  }
`;
