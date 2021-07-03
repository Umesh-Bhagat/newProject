import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBodyStyle from "../../assets/jss/materialUi-dashboard-react/cardBodyStyle.jsx"

const CardBody = ({...props}) =>{
    const {classes ,children,...rest}= props;

    const classCardBody = classNames({
        [classes.cardBody]:true,
    })
    return(
        <div {...rest} className={classCardBody}>
           {children}
        </div>
    );
}

export default withStyles(CardBodyStyle)(CardBody);