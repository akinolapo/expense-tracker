import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useStyles from './styles'

const Details = () => {
    const classes = useStyles()
  return (
    <Card >
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant='h5'>$50</Typography>
        </CardContent>
        
    </Card>
  )
}

export default Details