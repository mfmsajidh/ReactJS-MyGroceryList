import React from 'react'
import {TextField, Button} from '@material-ui/core'

import {app} from "./app";

export default function FormOne() {
    return (
        // eslint-disable-next-line
        <form onSubmit={() => app.Add()} method="POST" action="javascript:void(0);">
            <div>
                <TextField label="Remember to purchase" placeholder="Bun" id="add-item" fullWidth={true} required={true} />
            </div>
            <div>
                <TextField label="How many?" placeholder="10 Pieces" id="add-quantity" fullWidth={true} required={true} />
            </div>
            <Button variant="contained" color="primary" style={{marginTop:10}} type="submit">Add</Button>
        </form>
    )
}