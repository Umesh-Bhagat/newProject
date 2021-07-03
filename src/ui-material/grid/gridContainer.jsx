import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import GridContainerStyle from "../../assets/jss/materialUi-dashboard-react/gridContainerStyle.jsx"; 

const gridContainer = ({ ...props }) =>{
    const {classes , children,plain,...rest} = props;

    const classGridContainer = classNames({
        [classes.gridContainer]:true,
        [classes.PlainGridContainer]:plain
    });
    return(
        <Grid container {...rest} className={classGridContainer}>
           {children}
        </Grid>
    );
}

export default withStyles(GridContainerStyle)(gridContainer);