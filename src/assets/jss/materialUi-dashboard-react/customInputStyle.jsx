const CustomInputs = {
 inputStyle:{
   width:"90%",
   height:"45px",
   paddingLeft:"2%",
   border:"none",
   outline:"none",
   "&:hover,&:focus": {
      outline: "none",
    }
 },
 inputBorder:{
    width:"100%",
    display:"flex",
    marginBottom:"1.3%",
    padding:'.1%',
    border:"2px solid rgb(217,217,217)",
    borderRadius:".5em"
 },
 notValid:{
  width:"100%",
  display:"flex",
  marginBottom:"1.3%",
  padding:'.1%',
  borderRadius:".5em",
  border:"2px solid red",
  background:"rgb(255, 51, 51)"
 },
 errMegStyl:{
  margin:"0",
  color:"red",
  fontSize:"16px",
  paddingLeft:".5%",
  fontWeight:"600"
 }

}

export default CustomInputs;