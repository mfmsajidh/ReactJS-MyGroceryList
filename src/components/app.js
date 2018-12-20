import {TableCell, TableRow} from "@material-ui/core";
import ReactDOM from "react-dom";
import React from "react";

import {BtnEdit} from "./BtnEdit";
import {BtnDelete} from "./BtnDelete";
// import {CloseInput} from "./CloseInput";
import {CheckBoxes} from "./CheckBox"

export let app = new function() {

    this.items= ['Bread','Bun','Anchor Milk','Strawberry Jam'];
    this.quantities=[2,5,1,1]

    this.Count = function(data) {
        let el = document.getElementById('counter');
        if (data){
            el.innerHTML = 'You have to purchase ' + data + ' items' ;
        }
        else {
            el.innerHTML = 'No items to purchase';
        }
    };

    this.FetchAll = function(){
        let data = [];
        if (this.items.length>0) {
            for (let i=0; i<this.items.length; i++) {
                data.push(
                    <TableRow>
                        <TableCell><CheckBoxes/></TableCell>
                        <TableCell>{this.items[i]}</TableCell>
                        <TableCell>{this.quantities[i]}</TableCell>
                        <TableCell><BtnEdit index={i}/></TableCell>
                        <TableCell><BtnDelete index={i} /></TableCell>
                    </TableRow>
                )
            }
        }
        this.Count(this.items.length);

        ReactDOM.render(
            data,
            document.getElementById('items')
        )
    };

    this.Add = function (){
        let el = document.getElementById('add-item');
        let el2 = document.getElementById('add-quantity');

        let item = el.value;
        let quantity = el2.value;

        let quantityString = quantity.toString();

        if (item && quantity) {
            this.items.push(item.trim());
            this.quantities.push(quantityString.trim());
            el.value='';
            el2.value='';
            this.FetchAll();
        }

    };

    this.Edit = function (item) {

        let index = item;

        let el = document.getElementById('edit-item');
        let el2 = document.getElementById('edit-quantity');


        // if(!!el && !!el2 ){
        //     el.value = this.items[item];
        //     el2.value = this.quantities[item];
        // }

        el.value = this.items[item];
        el2.value = this.quantities[item];


        // document.getElementById('spoiler').style.display='block';

        // window.self=this;
        let self=this;

        document.getElementById('saveEdit').onsubmit= function(){


            let item = el.value;
            let quantity = el2.value;

            if (item && quantity) {
                self.items.splice(index, 1, item.trim());
                self.quantities.splice(index, 1, quantity.trim())
                self.FetchAll();
            }
        }
    }

    this.Delete=function(item){
        this.items.splice(item,1);
        this.quantities.splice(item,1);
        app.FetchAll();
    }


}();
