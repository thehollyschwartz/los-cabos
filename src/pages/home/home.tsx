import React from "react";
import { Grid, Button, makeStyles, ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo-home.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";

const styles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    container: {
        width: "100%",
    },
    img: {
        width: "75vh",
        height: "59vh",
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
    },
    btns: {
        width: "100%",
        height: 120,
    },
    callus: {
        fontFamily: "SigmarOne-Regular",
        backgroundColor: "var(--secondary)",
        width: "100%",
        borderRadius: 0,
    },
    menu: {
        fontFamily: "SigmarOne-Regular",
        backgroundColor: "var(--tertiary)",
        width: "100%",
    },
    contact: {
        fontFamily: "SigmarOne-Regular",
        backgroundColor: "var(--primary)",
        width: "100%",
        borderRadius: 0,
    },

}));

function Home() {
    const classes = styles();
    const history = useHistory();

    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Logo className={classes.img} />
            <Arrow className={classes.arrow} />
            <Grid
                className={classes.container}
                container
                direction="row"
                alignItems="center"
                justify="center"
            >
                <ButtonGroup className={classes.btns} aria-label="outlined primary button group">
                    <Button className={classes.callus} variant="contained" onClick={() => { window.open('tel:4252334988', '_self'); }}>Call Us</Button>
                    <Button className={classes.menu} variant="contained" onClick={() => history.push('/menu')}>Menu</Button>
                    <Button className={classes.contact} variant="contained" onClick={() => history.push('/contact')}>Contact</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default Home;

