import React, { useCallback, useReducer } from "react";

import Card from "../ui-material/card/card.jsx";
import CardHeader from "../ui-material/card/cardHeader.jsx";
import CardBody  from "../ui-material/card/cardBody.jsx";
import CardFooter from "../ui-material/card/cardFooter.jsx";
import GridContainer from "../ui-material/grid/gridContainer.jsx";
import GridItem from "../ui-material/grid/gridItems.jsx";
import CustomInput from "../ui-material/customInput/customInput.jsx";
import Button from "../ui-material/customButton/customButton.jsx";
import {
  VALIDATION_REQUIRED,
  VALIDATION_EMAIL,
  VALIDATION_MINLENGTH
} from "../utilFolder/validation.js";

const RegisterStateReducer = (state,action) =>{
  switch(action.type){
   case "INPUT_VALIDATION":
     let forIsValid= true;
     for(let InputId in state.inputData){
       if(InputId === action.InputId){
         forIsValid = forIsValid && action.isValid;
       }else{
         forIsValid= forIsValid && state.inputData[InputId].isValid
       }
     }
   return{
     ...state,
     inputData:{
       ...state.inputData,
       [action.inputId]:{value:action.value,isValid:action.isValid}
     },
     isValid:forIsValid
   }

   case "REGISTER_USER":
     return{
       ...state,
       subitted:action.subitted
     }

   default:
     return state;
  }
}

const Register = ({...props}) =>{
const [initialRegisterState , dispatch] = useReducer(
  RegisterStateReducer,{
    inputData:{
      name:{
        value:"",
        isValid:false
      },
      companyCode:{
        value:"",
        isValid:false
      },
      emailId:{
        value:"",
        isValid:false
      },
      password:{
        value:"",
        isValid:false
      },
      confirmPassword:{
        value:"",
        isValid:false
      }
    },
    isValid:false,
    subitted:false
  }
);
const {classes,onToggleForm,...rest}=props;


  const inputChangeHandler = useCallback((id,value,isValid)=>{
       dispatch({
         type:"INPUT_VALIDATION",
         isValid:isValid,
         value:value,
         inputId:id
       });
  },[]);

  const RegisterUser = () =>{
    dispatch({
      type:"REGISTER_USER",
      subitted:true
    });
  }

  console.log(initialRegisterState.subitted)
  return(
   <div>
     <Card plain style={{margin:'0'}}>
       <CardHeader>
         <h1 
         style={{
           margin:"1% 0"
         }}
         >
            Register a ClassLink Partner Portal Account
         </h1>
         <p 
         style={{
          fontSize:"16px",
          margin:"1% 0",
          fontWeight:"600"
         }}>
           Fill out the form below
         </p>
       </CardHeader>
       <CardBody>
         <GridContainer>
           <GridItem xs={12} sm={12} md={12}>
             <CustomInput
               elementType="text"
               placeholder="Your Name"
               id="name"
               IconName="PersonIcon"
               valid={initialRegisterState.inputData.name.isValid}
               finalValue={initialRegisterState.subitted}
               InputDataChangeHandler={inputChangeHandler}
               validator={[VALIDATION_REQUIRED()]}
              />
           </GridItem>
           <GridItem xs={12} sm={12} md={12}>
             <CustomInput
               elementType="text"
               placeholder="Company Code (optional)"
               id="companyCode"
               IconName="ApartmentIcon"
               valid={initialRegisterState.inputData.companyCode.isValid}
               finalValue={initialRegisterState.subitted}
               InputDataChangeHandler={inputChangeHandler}
               validator={[VALIDATION_REQUIRED()]}
              />
           </GridItem>
           <GridItem xs={12} sm={12} md={12}>
             <h4 
               style={{
                 color:"rgb(14, 132, 216)",
                 textAlign:"right",
                 paddingTop:".8%",
                 marginBottom:".7%",
                 marginTop:"1%"
                }}
              >
                RESEND VERIFICATION EMAIL
              </h4>
           </GridItem>
           <GridItem xs={12} sm={12} md={12}>
             <CustomInput
               elementType="text"
               placeholder="Email Id"
               id="emailId"
               IconName="MailOutlineIcon"
               valid={initialRegisterState.inputData.emailId.isValid}
               finalValue={initialRegisterState.subitted}
               InputDataChangeHandler={inputChangeHandler}
               validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
              />
           </GridItem>
           <GridItem xs={6} sm={6} md={6}>
             <CustomInput
               elementType="password"
               placeholder="Password"
               id="password"
               VisibleIconName="VisibilityIcon"
               NotVisibleIconName="VisibilityOffIcon"
               valid={initialRegisterState.inputData.password.isValid}
               finalValue={initialRegisterState.subitted}
               InputDataChangeHandler={inputChangeHandler}
               validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
             />
           </GridItem>
           <GridItem xs={6} sm={6} md={6}>
             <CustomInput
               elementType="password"
               placeholder="Confirm Password"
               VisibleIconName="VisibilityIcon"
               id="confirmPassword"
               NotVisibleIconName="VisibilityOffIcon"
               valid={initialRegisterState.inputData.confirmPassword.isValid}
               finalValue={initialRegisterState.subitted}
               InputDataChangeHandler={inputChangeHandler}
               validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
             />
           </GridItem>  
           <GridItem>
             <p 
               style={{
               margin:"0",
               fontSize:"16px"
             }}>
                Passwords require 8 or more characters and at least 1 symbol.
             </p>
           </GridItem>                    
         </GridContainer>
       </CardBody>
     <CardFooter>
       <GridContainer style={{width:"100%"}}>
         <GridItem sx={4} sm={4} md={4}>
           <Button onClick={RegisterUser}>
             Register
           </Button>
         </GridItem>
         <GridItem sx={8} sm={8} md={8}>
           <div style={{width:"50%",float:"right"}}>
             <Button 
               plain 
               style={{ 
                 color:"rgb(14, 132, 216)"
               }}
              onClick={onToggleForm}
              >
                RETURN TO LOGIN
             </Button>
           </div>
         </GridItem>
       </GridContainer>
     </CardFooter>
    </Card>
 </div>
 );
}

export default Register;