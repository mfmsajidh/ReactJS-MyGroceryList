import React from 'react'
import { Typography } from '@material-ui/core';

import {TxtField} from "./TxtField";
import {app} from "./app";

// export default () => (
//     <div>
//         <Typography variant="h6">Purchase these items today</Typography>
//         <TxtField />
//     </div>
// )


export default class extends React.Component {
    componentDidMount() {
        app.FetchAll();
    }

    render() {
        return (
            <div>
                <Typography variant="h6">Purchase these items today</Typography>
                <TxtField />
            </div>
        )
    }
}
