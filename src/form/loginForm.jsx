import React, { useCallback, useReducer } from "react";

import Card from "../ui-material/card/card.jsx";
import CardHeader from "../ui-material/card/cardHeader.jsx";
import CardBody from "../ui-material/card/cardBody.jsx";
import GridContainer from "../ui-material/grid/gridContainer.jsx";
import GridItems from "../ui-material/grid/gridItems.jsx";
import CustomInput from "../ui-material/customInput/customInput.jsx";
import Button from "../ui-material/customButton/customButton.jsx";

import {VALIDATION_REQUIRED,VALIDATION_EMAIL,VALIDATION_MINLENGTH} from "../utilFolder/validation.js";


const LoginDataReducer = (state, action) =>{
  switch(action.type){
   
    case "INPUT-CHANGE" : 
    let formIsVAlid = true;
    for(const inputId in state.inputData){
      if(inputId === action.inputId){
        formIsVAlid = formIsVAlid && action.isValid;
      }else{
        formIsVAlid = formIsVAlid && state.inputData[inputId].isValid
      }
    }
    return{
      ...state,
      inputData:{
       ...state.inputData,
       [action.inputId]:{value:action.value,isValid:action.isValid}
      },
      isValid:formIsVAlid
    }

    case "SUBMIT":
      return{
        ...state,
        submitted:action.submitted
      }
  }
}
const LoginForm = ({...props}) => {

  const [initialLoginDataState,dispatch] = useReducer(
    LoginDataReducer,{
      inputData:{
        emailId:{
          value:"",
          isValid:false,
          message:"Please enter your valid email id"
        },
        password:{
          value:"",
          isValid:false,
          message:"Please enter your 6 digit valid password"
        }
      },
      submitted:false,
      isValid:false 
    }
  )
  const {classes,onToggleForm,...rest}=props;

  const InputDataChangeHandler = useCallback((id,value,isValid)=>{
      dispatch({
        type:"INPUT-CHANGE",
        value:value,
        isValid:isValid,
        inputId:id
      });
  },[]);

  const GetLoggin = (event)=>{
   event.preventDefault();
    dispatch({
      type:"SUBMIT",
      submitted:true
    })
  }
   return(
       <div> 
           <Card 
             plain
             style={{
              width:"68%",
              position:"absolute",
              top:"23%",
              left:"15%",
              right:"55%",
              margin:"0"
             }}
           >
              <CardHeader>
                  <h1 
                  style={{
                    marginBottom:"0",
                    fontWeight:"630",
                    fontSize:"28px",
                    fontFamily:" Sans-serif Monospace "
                   }}>
                     Sign in to ClassLink Partner Portal
                  </h1>
                  <h3 
                  style={{
                    margin:" .5% 0 0 0",
                    fontWeight:"600"
                   }}>
                     Enter your details below
                  </h3>      
              </CardHeader>
              <CardBody>
                   <h4 
                    style={{
                      color:"rgb(14, 132, 216)",
                      textAlign:"right",
                      paddingTop:".8%",
                      marginBottom:"1%"
                    }}>
                      RESEND VERIFICATION EMAIL
                   </h4>
                   <GridContainer>
                       <GridItems style={{marginBottom:"1%"}} xs={12} sm={12} md={12}>
                         <CustomInput
                            elementType="text"
                            placeholder="Email Id"
                            id="emailId"
                            IconName="MailOutlineIcon"
                            InputDataChangeHandler={InputDataChangeHandler}
                            valid={initialLoginDataState.inputData.emailId.isValid}
                            finalValue={initialLoginDataState.submitted}
                            validator={[VALIDATION_REQUIRED(),VALIDATION_EMAIL()]}
                           /> 
                       </GridItems>
                       <GridItems xs={12} sm={12} md={12}>
                       <CustomInput
                            elementType="password"
                            placeholder="Password"
                            id="password"
                            VisibleIconName="VisibilityIcon"
                            NotVisibleIconName="VisibilityOffIcon"
                            valid={initialLoginDataState.inputData.password.isValid}
                            finalValue={initialLoginDataState.submitted}
                            InputDataChangeHandler={InputDataChangeHandler}
                            validator={[VALIDATION_REQUIRED(),VALIDATION_MINLENGTH(6)]}
                           />
                       </GridItems>
                   </GridContainer>
                   <GridContainer style={{marginTop:"3%"}}>
                       <GridItems xs={4} sm={4} md={4}>
                          <Button onClick={(event)=>GetLoggin(event)}>Login</Button>
                       </GridItems>
                       <GridItems xs={4} sm={4} md={4}>
                          <Button onClick={onToggleForm}>Register</Button>
                       </GridItems>
                       <GridItems 
                        style={{
                         textAlign:"right",
                         paddingTop:"1.5%",
                         color:"rgb(14, 132, 216)",
                         fontSize:"14px",
                         fontWeight:"650"
                        }} 
                         xs={4} sm={4} md={4}
                        >
                          FORGOT PASSWORD ?
                       </GridItems>
                  </GridContainer>
               </CardBody>
           </Card>
       </div>

    );
}

export default LoginForm