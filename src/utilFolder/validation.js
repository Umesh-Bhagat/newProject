import React from "react";

const VALIDATION_TYPE_EMAIL = "EMAIL";
const VALIDATION_TYPE_REQUIRED = "REQUIRED";
const VALIDATION_TYPE_MINLENGTH="MIN"


export const VALIDATION_REQUIRED = ( ) =>({
    type:VALIDATION_TYPE_REQUIRED
});

export const VALIDATION_EMAIL = ( ) => ({
    type:VALIDATION_TYPE_EMAIL
});

export const VALIDATION_MINLENGTH = (value)=>({
    type:VALIDATION_TYPE_MINLENGTH,
    value:value
});

export const Validate = (value,validators)=>{
    let isvalid=true;
    console.log(value, validators);
    for(const validator in validators){
       if(validators[validator].type === VALIDATION_TYPE_REQUIRED){
           isvalid=isvalid && value.trim().length > 0;
       }
       if(validators[validator].type === VALIDATION_TYPE_MINLENGTH){
           console.log(value.trim().length, validators[validator].value)
           isvalid=isvalid && value.trim().length >= validators[validator].value
       }
       if(validators[validator].type === VALIDATION_TYPE_EMAIL){
          isvalid = isvalid && /^\S+@\S+\.\S+$/.test(value);
       }
    }
    return isvalid;
}