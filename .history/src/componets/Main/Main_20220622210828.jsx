import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $100</Typography>
            <Typography variant='subtitle'
        </CardContent>
    </Card>
  )
}

export default Main