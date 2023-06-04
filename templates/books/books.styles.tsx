import { Grid } from '@mui/material'
import styled from 'styled-components'
import Image from 'next/image'


export const BooksContainer = styled(Grid)`
  height: calc(100vh - 92px);
  margin-top: 24px;
`

export const CardContainer = styled.div`
  height: 80%;
  background-color: #d2d0ed66;
  border-radius: 12px;
  margin-top: 45px;
  margin-right: 140px;
`

export const CardImage = styled(Image)`
  width: 80px;
  height: 80px;
`

export const GridImage = styled(Grid)`
  margin-top: 8px;
  margin-left: 20px;
`

export const SearchContainer = styled.div`
    position: relative;
    width: 100%;
`

export const SearchImage = styled(Image)`
  position: absolute;
  top: 47%;
  left: 10px;
  transform: translateY(-50%);
`

