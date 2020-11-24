import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/images/logo-home.svg";

const styles = makeStyles((theme) => ({
    container: {
        height: "75vh",
    },
    img: {
        width: "75vh",
        height: "59vh",
    }, 
    btn: {
        fontFamily: "Oswald-Regular",
        color: "var(--white)",
        backgroundColor: "var(--primary)",
        borderRadius: 25,
        padding: "10px 30px 10px 30px",
    },

}));

function Home() {
    const classes = styles();
    return (
        <Grid
            className={classes.container}
            container
            direction="column"
            alignItems="center"
            justify="center"
        >            
            <Logo className={classes.img}/>
            <Button className={classes.btn} variant="contained" onClick={() => { window.open('tel:4258885256', '_self');}}>Order Now</Button>
        </Grid>
    )
}

export default Home;

