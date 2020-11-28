import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/images/logo-home.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";

const styles = makeStyles((theme) => ({
    container: {
        height: "100vh",
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
    arrow: {
        marginTop: 70,
        marginBottom: 100,
        width: "5vh",
        height: "5vh",
        animation: "$arrow 2s infinite",
    },
      "@keyframes arrow": {
        "0%, 20%, 50%, 80%, 100%": {
          transform: "translateY(0)",
        },
        "40%": {
          transform: "translateY(-30px)",
        },
        "60%": {
          transform: "translateY(-15px)",
        }
      }

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
            <Button className={classes.btn} variant="contained" onClick={() => { window.open('tel:4258885256', '_self');}}>Call Now</Button>
            <Arrow className={classes.arrow}/>

        </Grid>
    )
}

export default Home;

