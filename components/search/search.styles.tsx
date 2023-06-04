import { Grid } from '@mui/material'
import styled from 'styled-components'
import Image from 'next/image'



export const SearchContainer = styled.div`
  position: relative;
`

export const SearchImage = styled(Image)`
  position: absolute;
  top: 45%;
  left: 10px;
  transform: translateY(-50%);
`
export const Input = styled.input`
    background: white;
    border-radius: 6px;
    padding: 6px;
    padding-left: 36px;
    border: none;
    width: 100%;
    height: 40px;
`
