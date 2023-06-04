import React from 'react'
import {
  Grid,
  Typography,
  Container
} from '@mui/material'
import { NoDataContainer }  from './noData.styles'


const NoData = () => {
  return (
    <NoDataContainer> 
      <Container maxWidth='xl'>
        <Grid container justifyContent='center'>
          <Typography>No Data</Typography>
        </Grid>
      </Container>
    </NoDataContainer>
  )
}

export default NoData

