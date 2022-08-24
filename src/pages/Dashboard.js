import { Grid } from '@mui/material'
import React from 'react'
import Card from '../components/Card'
import About from './About'
import Candidates from './Candidates'
import Ranking from './Ranking'

export default function Dashboard() {
  return (
    <Grid container spacing={2} alignItems="center" direction="row" sx={{ height: 80 }}>
      <Grid item xs={6}>
        <Card to="/ranking">
          <Ranking dashboard/>  
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card to="/about" background='linear-gradient(217deg, rgba(247,186,174,1) 0%, rgba(156,199,231,1) 67%, rgba(242,199,242,1) 100%)'>
          <About intro />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card to="/candidates" large>
          <Candidates limit={5} />
        </Card>
      </Grid>
    </Grid>
  )
}
