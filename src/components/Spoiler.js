import {Button, TextField} from "@material-ui/core";
import React from "react";

import {CloseInput} from './CloseInput'

const bWidth = {
    width: '40%'
}

const bMargin = {
    width: '40%',
    marginLeft: '5px'
}

export default function Spoiler() {
    return (
        <div id="spoiler" style={{marginTop:15}}>
            <form id="saveEdit" method="POST" action="javascript:void(0)">
                <TextField id="edit-item" style={bWidth}/>
                <TextField id="edit-quantity" style={bMargin}/>
                <Button type="submit" variant="contained" color="secondary" style={{marginLeft:5}}>Edit</Button>
                <Button onClick={() => CloseInput()} style={{marginLeft:5}}><i className="material-icons">&#xe5cd;</i></Button>
            </form>
        </div>
    )
}