import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useStyles from './styles'
import { TabPanel } from '@material-ui/lab'

const Details = () => {
    const classes = useStyles()
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title}/>
        <CardContent>
            <TabPanel
        </CardContent>
        
    </Card>
  )
}

export default Details