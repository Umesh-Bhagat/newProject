import React from "react";
import ClassNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import CardStyle from "../../assets/jss/materialUi-dashboard-react/cardStyle.jsx";

const Card = ({...props}) =>{
    const {classes,children,plain,...rest }=props;

    const classCard = ClassNames({
        [classes.card]:true,
        [classes.plainCard]:plain,
    })
    return(
       <div {...rest} className={classCard}>
           {children}
       </div>
    );
}

export default withStyles(CardStyle)(Card);