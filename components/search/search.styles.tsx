import styled from 'styled-components'
import { TextField } from '@mui/material';



export const CustomInput = styled(TextField)`
  background-color: white;
  color: black;
  margin-bottom: 120px;
  border-radius: 10px;

  & input {
    color: black;
  }
`;
