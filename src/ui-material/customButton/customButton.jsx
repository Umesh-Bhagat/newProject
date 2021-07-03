import React from "react";
import ClassNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import CustomButtonStyle from "../../assets/jss/materialUi-dashboard-react/customButtonStyle.jsx";


const CustomButton = ({...props}) => {
    const {classes, children,plain,...rest} = props;

    const classButton = ClassNames({
        [classes.buttonStyle]:true,
        [classes.plainButton]:plain?true:false
    });
    return(
        <button {...rest} className={classButton}>
            {children}
        </button>
    );
}

export default withStyles(CustomButtonStyle)(CustomButton);