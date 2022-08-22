import { Grid } from '@mui/material'
import React from 'react'
import Card from '../components/Card'

export default function Dashboard() {
  return (
    <Grid container spacing={2} alignItems="center" direction="row" sx={{ height: 80 }}>
            <Grid item xs={6}>
              <Card to="/ranking"/>
            </Grid>
            <Grid item xs={6}>
              <Card to="/about"/>
            </Grid>
            <Grid item xs={12}>
              <Card to="/candidates"/>
            </Grid>
          </Grid>
  )
}
