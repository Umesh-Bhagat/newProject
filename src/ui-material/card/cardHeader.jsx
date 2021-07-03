import React from "react";
import ClassNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeaderStyle from "../../assets/jss/materialUi-dashboard-react/cardHeaderStyle.jsx";

const CardHeader = ({...props}) =>{
    const {classes,children,HeaderTypeStyle,...rest}=props;
    const ClassCardHeader = ClassNames({
        [classes.cardHeader]:true,
        [classes[HeaderTypeStyle]]: HeaderTypeStyle, //you can also pass more then one varianle to this
    });
    return(
       <div {...rest} className={ClassCardHeader}>
           {children}
       </div>
    );
}

export default withStyles(CardHeaderStyle)(CardHeader);