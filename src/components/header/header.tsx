import React from "react";
import { AppBar, Link, makeStyles, Toolbar } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const styles = makeStyles(() => ({
    root: {
        backgroundColor: "var(--black)",
    },
    container: {
        justifyContent: "space-between",
    },
    img: {
        margin: "10px 0 10px 0",
        height: 70,
    },
    link: {
        textDecoration: "none",
        color: "var(--white)",
        margin: "0 30px 0 30px",
        "&:hover": {
            color: "var(--primary)",
            textDecoration: "none",
        }
    }

}));

function Header() {
    const classes = styles();
    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.container}>
                <Logo className={classes.img} />
                <div>
                    <Link className={classes.link} href="/home" >Home</Link>
                    <Link className={classes.link} href="/menu" >Menu</Link>
                    <Link className={classes.link} href="/contact" >Contact</Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;


