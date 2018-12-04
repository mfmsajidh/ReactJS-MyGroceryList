import React, {Component} from 'react'
import {Button} from "@material-ui/core";

import {app} from "./app";

//ES6 Class
export class BtnEdit extends Component{
    render(){
        return (
            <Button variant="contained" color="secondary" onClick={()=>app.Edit(this.props.index)}>Edit</Button>
        )
    }
}