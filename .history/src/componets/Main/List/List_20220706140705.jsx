import React from 'react'
import {List as MUIList, ListItem, ListItemAvater, ListItemText, Avater, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import useStyles from './styles'

const List = () => {
    const Classes = useStyles()
  return (
    <MUIList dense={false} class>

    </MUIList>
  )
}

export default List