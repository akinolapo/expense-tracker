import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useStyles from './styles'

const Details = () => {
    const classes = useStyles()
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title}/>
        <CardC
        
    </Card>
  )
}

export default Details