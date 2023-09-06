import styled from 'styled-components';

export const Form = styled.form``;

export const Label = styled.label`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 50%;
  height: 25px;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 22px;
  border-radius: 4px;
  border: 1px solid black;
  font-weight: 700;
  font-size: 18px;
  background-color: #7aa19f;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #515177;
    color: #dbe4ee;
  }
`;
