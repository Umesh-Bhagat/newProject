import React from "react";
import ClassNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import CardFooterStyle from "../../assets/jss/materialUi-dashboard-react/cardFooterStyle.jsx";

const CardFooter = ({...props}) =>{
    const {classes,children,...rest} = props;

    const ClassFooter = ClassNames({
        [classes.cardFooter]:true
    });
    return(
        <div {...rest} className={ClassFooter}>
           {children}
        </div>
    );
}

export default withStyles(CardFooterStyle)(CardFooter);