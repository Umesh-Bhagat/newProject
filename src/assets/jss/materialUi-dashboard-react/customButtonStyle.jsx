import { primaryColor ,infoColor } from "../materialUi-dashboard-react.jsx";

const CustomButton = {
    buttonStyle:{
        width:"100%",
        height:"40px",
        color:"white",
        border:"none",
        fontSize:"14px",
        fontWeight:"600",
        borderRadius:".5em",
        padding:"1.5%",
        background:"rgb(14, 132, 216)",
    },
    plainButton:{
        background:'none',
        fontWeight:"600",
        "&:hover":{
            background:"rgb(242, 242, 242)"
        }
        
    }
}

export default CustomButton;