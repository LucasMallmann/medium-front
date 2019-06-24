import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.div`
  width: 70%;
  margin: 1rem auto;
  h1 {
    margin: 0;
  }
  p {
    margin: 16px 0;
  }
`;

export const PostForm = styled(Form)`
  border: 1px solid #ccc;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  height: 380px;
`;

export const PostTitle = styled(Input)`
  border: none;
  outline: 0;
  font-family: 'Lora', serif;
  color: #272a2b;
  font-size: 26px;
  background: none;
`;

export const Description = styled(PostTitle)`
  font-size: 18px;
  margin: 8px 0;
`;

export const Body = styled(Input)`
  border: none;
  resize: none;
  font-family: 'Lora', sans-serif;
  outline: none;
  height: 90%;
  font-size: 16px;
  margin-top: 16px;
`;

export const Cover = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  /* width: 300; */

  &::before {
    content: 'Select an image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;

export const Button = styled.button`
  height: 56px;
  background: #14c767;
  color: white;
  font-family: inherit;
  border: none;
  outline: none;
  width: 200px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
