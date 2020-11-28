import React from "react";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, makeStyles } from "@material-ui/core";
import Nachos from "../../assets/images/nachos.jpg"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';



const styles = makeStyles((theme) => ({
    root: {
        fontFamily: "Oswald-Regular",
        margin: 10,
        width: 200,
    },
    label: {
        fontFamily: "Oswald-Regular",

        color: "var(--secondary)",
    },
    text: {
        fontSize: 12,
    },
    media: {
        height: 140
    },

    expand: {
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))

function MenuCard(props: any) {
    const classes = styles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardContent>
                <h2 className={classes.label}>{props.title}</h2>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={Nachos}
            />
            <CardActions disableSpacing>
                <p className={classes.text}>{props.price}</p>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <p className={classes.text}>{props.content}</p>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default MenuCard;