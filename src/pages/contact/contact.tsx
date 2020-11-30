import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        backgroundColor: "var(--primary)",
    }
}));

function Contact() {
    const classes = styles();
    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <p>jdhwfkjehwflkjrwhfkjwrehfkjw</p>
            <p>jdhwfkjehwflkjrwhfkjwrehfkjw</p>
            <p>jdhwfkjehwflkjrwhfkjwrehfkjw</p>
            <p>jdhwfkjehwflkjrwhfkjwrehfkjw</p>
        </Grid>
    )
}

export default Contact;
