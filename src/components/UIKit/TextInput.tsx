import React from 'react';
import { TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
type Props = {
    // fullWidth:boolean;
    // color:'primary'|'secondary';
    // defaultValue:string;
    // disabled:boolean;
    // error:boolean;
    id:string;
    label:string;
    type:'text'|'password';
    // variant:'filled'| 'outlined'| 'standard';
}

function TextInput(props:Props){
    return(
        <div>
        <TextField 
            id={props.id} 
            label={props.label}
            type={props.type}
        />
        </div>
    );
}

export default 　TextInput;