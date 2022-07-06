import React from 'react'
import {List as MUIList, ListItem, ListItemAvater, ListItemText, Avater, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import useStyles from './styles'

const List = () => {
    const classes = useStyles()

    const transactions = [
        { id:1, type: "Income"}
    ]
  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) =>(
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvater>
                        <Avater className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}></Avater>
                    </ListItemAvater>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List