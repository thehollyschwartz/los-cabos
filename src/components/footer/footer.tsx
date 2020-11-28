import React from "react";
import { AppBar, IconButton, Link, makeStyles, Toolbar } from "@material-ui/core";
import { Mail, Phone, Room } from '@material-ui/icons';

// import MailIcon from '@material-ui/icons/Mail';

const styles = makeStyles(() => ({
    root: {
        backgroundColor: "var(--black)",
        padding: "15px 0 15px 0",
        top: "auto",
        bottom: 0,
    },
    container: {
        justifyContent: "center",
    },
    btn: {
        textDecoration: "none",
        color: "var(--white)",
        border: "1px solid var(--white)",
        margin: "0 50px 0 50px",
        width: 40,
        height: 40,
        "&:hover": {
            textDecoration: "none",
            color: "var(--primary)",
            border: "1px solid var(--primary)",
        }
    },
    icon: {
        width: 20,
    }

}));

function Header() {
    const classes = styles();
    return (
        <AppBar className={classes.root} position="relative">
            <Toolbar className={classes.container}>
                <div>
                    <IconButton className={classes.btn}>
                        <Mail className={classes.icon} />
                    </IconButton>
                    <IconButton className={classes.btn}>
                        <Phone className={classes.icon} />
                    </IconButton>
                    <IconButton className={classes.btn}>
                        <Room className={classes.icon} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar >
    )
}

export default Header;