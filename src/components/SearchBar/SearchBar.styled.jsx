import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 15px;
`;
export const Input = styled(Field)`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 400px;
  border: none;
  border-bottom: 1px solid #757575;
  margin-right: 10px;
  display: inline-block;
  font: inherit;
  outline: none;
  &: placeholder {
    font: inherit;
    font-size: 18px;
  }
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 20px;
  min-width: 0;
  outline: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
