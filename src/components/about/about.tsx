import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { ReactComponent as Tree } from "../../assets/images/tree.svg";
import Background from "../../assets/images/background-about.svg";

const styles = makeStyles(() => ({
    root: {
        color: "var(--white)",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "20px 0 20px 0",
    },
    container: {
        fontFamily: "OpenSans-Regular",
        textAlign: "center",
        width: "40%",
    },
    img: {
        width: 50,
    }

}));

function About() {
    const classes = styles();
    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <h2>About Los Cabos (North Bend)</h2>
            <Tree className={classes.img} />
            <Grid
                className={classes.container}
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <p>Los Cabos (North Bend) is a proud family-owned and operated resturant that offers a cornerstone of great authentic Mexican food as well as exellent cocktails and drinks.</p>
                <p>This inimate resturant is located just off of the I-90 across the street for the North Bend Outlet Mall.</p>
                <p>Please accept our personal invitation to join us for authentic Mexican food served at our relaxing atmosphere of a resturant.</p>
            </Grid>

        </Grid>
    )
}

export default About;
