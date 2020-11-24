import React from "react";
import { AppBar, Grid, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const styles = makeStyles((theme) => ({
    container: {
        backgroundColor: "var(--black)",
    },
    innerContainer: {
        justifyContent: "space-between",
    },
    img: {
        margin: "10px 0 10px 0",
        height: 70,
    },
    links: {
    },
    link: {
        textDecoration: "none",
        color: "var(--white)",
        margin: "0 30px 0 30px",
        "&:hover": {
            color: "var(--primary)",
            textDecoration: "none",

        }
    },
}))

function Header() {
    const classes = styles();
    return (
        <AppBar className={classes.container}>
            <Toolbar className={classes.innerContainer}>
                <Logo className={classes.img}/>
                <div className={classes.links}>
                    <Link className={classes.link} href="/home" >Home</Link>
                    <Link className={classes.link} href="/about" >About</Link>
                    <Link className={classes.link} href="/menu" >Menu</Link>
                    <Link className={classes.link} href="/contact" >Contact</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;