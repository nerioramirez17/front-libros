import { Grid, Typography } from '@mui/material'
import styled, { keyframes } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image'


const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const LoadingSpinner = styled(CircularProgress)`
  animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingText = styled(Typography)`
  margin-top: 16px;
`;