import React, { useEffect, useReducer } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputsIcons from "../Icons/icons.jsx";
import InputStyle from "../../assets/jss/materialUi-dashboard-react/customInputStyle.jsx";
import {Validate} from "../../utilFolder/validation.js";


const inputReducer = (state , action) =>{
    switch(action.type){
      case "INPUT_CHANGED":
        return{
          ...state,
          value:action.value,
          isValid:(Validate(action.value,action.validator))
        }
      case "TOGGLE-PASSWORD-VISIBILITY" :
        return{
          ...state,
          PasswordVisible : action.PasswordVisible
        }
    }
}
const CustomInputs = ({...props}) =>{

  const [initialInputState, dispatch] = useReducer(
   inputReducer,{
     value:"",
     isValid:"",
     PasswordVisible:false,
   });

    const {
      id,
      classes,
      elementType,
      placeholder,
      validator,
      IconName,
      valid,
      finalValue,
      VisibleIconName,
      NotVisibleIconName,
      InputDataChangeHandler,
      ...rest
    } = props;

    const {value , isValid,} = initialInputState

    useEffect(()=>{
      InputDataChangeHandler(id,value,isValid);
    },[id,value, isValid,InputDataChangeHandler]);


    const  inputChangeHandler = (event) =>{
      event.preventDefault();
      let value = event.target.value;  
       dispatch({
         type:"INPUT_CHANGED",
         value:value,
         validator:validator
       })
    }

    const ToggleVisivilityIcon = ( ) =>{
        dispatch({
          type:"TOGGLE-PASSWORD-VISIBILITY",
          PasswordVisible:!initialInputState.PasswordVisible
        });
    }
   
    switch(elementType){
        case "text" :
        return(
          <div>
            {!valid && finalValue?(
            <p className={classes.errMegStyl}>
              Please enter your valid {placeholder}
            </p>):null}
            <div 
            className={!valid && finalValue?classes.notValid:classes.inputBorder}
            >
             <input  
             className={classes.inputStyle}
             type={elementType}
             placeholder={placeholder}
             {...rest}
              onChange={inputChangeHandler}
             />
             <InputsIcons IconType={IconName}/>       
           </div>
          </div>
        )

        case "password" :
          return(
           <div>
             {!valid  && finalValue ?(
             <p className={classes.errMegStyl}>
               Please enter your 6 digit valid {placeholder}
             </p>):null
              }
             <div 
               className={!valid && finalValue?classes.notValid:classes.inputBorder}
              >
                <input  
                className={classes.inputStyle}
                type={initialInputState.PasswordVisible?"text":"password"}
                placeholder={placeholder}
                {...rest}
                onChange={inputChangeHandler}
                />
                <div 
                style={{
                  width:"40px",
                  paddingTop:"10px",
                }}
                onClick={ToggleVisivilityIcon}
                >
                  {initialInputState.PasswordVisible?(
                     <InputsIcons IconType={VisibleIconName}/>
                    ):(<InputsIcons IconType={NotVisibleIconName}/>)
                  }
                </div>      
             </div>
           </div>
          )
       
        default :
        return(
         <input/>
        )     
    }
}

export default withStyles(InputStyle)(CustomInputs);