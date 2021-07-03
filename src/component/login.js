import React, { Component } from "react";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import Card from "../ui-material/card/card.jsx";
import CardBody from "../ui-material/card/cardBody.jsx";
import CardHeader from "../ui-material/card/cardHeader.jsx";
import CustomInput from "../ui-material/customInput/customInput.jsx";
import GridContainer from "../ui-material/grid/gridContainer";
import GridItems from "../ui-material/grid/gridItems.jsx";

import Button from "../ui-material/customButton/customButton.jsx";
import LoginForm from "../form/loginForm.jsx";
import RegisterForm from "../form/registerForm.jsx";

class login extends Component{

  state={
    ToggleForm:true,
  }

  ToggleRegistrationForm =(e ) =>{
    e.preventDefault();
    this.setState({ToggleForm:!this.state.ToggleForm})
  }
   render(){
       return(
           <div style={{display:"flex"}}>
             <Card plain style={{width:"35%",margin:"0",background:"rgb(14, 132, 216)"}}>
                <CardBody style={{padding:"6% 8%"}}>
                  <div style={{paddingTop:"5%"}}><AccountBalanceIcon style={{width:"50px",color:"white",height:"auto"}}/></div>
                   <div 
                    style={{
                        color:"white",
                        textAlign:"center",
                        marginTop:".1%",
                        padding:"0 6%",
                        position:"relative",
                    }}>
                       <div 
                       style={{
                        fontSize:"28px",
                        fontWeight:"600",
                        Width:"100%",
                        paddingTop:"18%"
                        }}> 
                          <p>Partner Implementations Made Easy </p>
                       </div>
                       <div 
                        style={{
                            fontSize:"16px",
                            fontWeight:'480',
                            padding:"2% .5% 40% .5%",
                            color:"whiteSmoke",
                       
                        }}
                       >
                         <p>
                           ClassLink Partner Portal enables our 
                           vendor partners to easily manage their
                           Applications’ roster and authentication
                           requirements. 
                         </p>
                       </div>
                   </div>
                   <div 
                    style={{
                       color:"white",
                       textAlign:"center",
                       padding:"10% 4% 2.5% 4%",
                       position:"relative"
                     }}>
                       <p style={{margin:"0"}}>classLink inc</p>
                       <p style={{margin:"0"}}>dgjh dggeg gdgge ged | +195868475845</p>
                    </div>
                </CardBody>
             </Card>   
             <div style={{ width:"65%",background:"rgb(242, 242, 242,.4)",position:"relative"}}>
               {this.state.ToggleForm?( 
                 <LoginForm onToggleForm={(event)=>this.ToggleRegistrationForm(event)}/>
               ):(
                 <div style={{
                   height:"auto",
                   position:"absolute",
                   top:"14%",
                   left:"15.5%",
                   right:"15.5%",
                   float:"center"
                 }}>
                    <RegisterForm onToggleForm={(event)=>this.ToggleRegistrationForm(event)}/>
                 </div>
               )}
             </div>
          </div>
       );
   }
}

export default login;