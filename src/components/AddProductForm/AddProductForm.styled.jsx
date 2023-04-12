import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Input = styled(Field)`
  padding: 6px 12px;
  margin: 5px;
  max-width: 200px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
