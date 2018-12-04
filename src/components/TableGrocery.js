import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import React from "react";

export function TableGrocery(){
    return (
        <>
            <Typography variant="subheading" style={{paddingTop:20}}>Don't forget to purchase these !</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell/>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody id="items"/>
            </Table>
        </>
    )

}