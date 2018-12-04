import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography, 
} from '@material-ui/core'

const NavBar = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color=
                "inherit">My Grocery  List</Typography>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar;