import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import { ReactComponent as Taco } from "../../assets/images/taco.svg";
import Image from "../../assets/images/green-background.svg"; // Import using relative path



const styles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        height: "80vh",
    },
    title: {
        color: "var(--white)",
        margin: "30px 0 0 30px",
    },
    text: {
        color: "var(--white)",
        margin: "0 0 0 30px",
        padding: 0,
    },
    img: {
        padding: "0 20vh",
        width: "60vh",
        height: "60vh",
    }, 
}));

function About() {
    const classes = styles();
    return (
        <Grid
        className={classes.container}
        container
        direction="row"
        alignItems="center"
        justify="flex-start"
        >  
            <h1 className={classes.title}>Welcome to Los Cabos (North Bend)</h1>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
            >  
                <div className={classes.text}>
                    <p>Los Cabos (North Bend) is a proud family-owned and operated<br/> 
                    resturant that offers a cornerstone of great authentic Mexican<br/> 
                    food as well as exellent cocktails and drinks.</p>
                    <p>This inimate resturant is located just off of the I-90 across the<br/> 
                    street for the North Bend Outlet Mall.</p>
                    <p>Please accept our personal invitation to join us for authentic<br/> 
                    Mexican food served at our relaxing atmosphere of a <br/> 
                    resturant.</p>
                </div>          
                <Taco className={classes.img}/>
            </Grid>
        </Grid>
    )
}

export default About;

