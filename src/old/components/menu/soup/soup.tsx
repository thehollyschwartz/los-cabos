import React from "react";
import { Grid } from "@material-ui/core";

import Card from "../../card/card"

function Soup(props: any) {
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
        >
            <Card
                title="Tortilla Soup"
                content={"Rich chicken broth with shredded chicken and thinly sliced tortilla chips. Garnished with fresh avocado and diced tomato. Large Bowl, 11.95."}
            />
            <Card
                title="Sopas De Frijoles"
                content={"Whole beans in their natural full-flavored broth topped with pico de gallo and shredded Monterrey Jack cheese. Large Bowl, 8.95."}
            />
        </Grid>
    );
}

export default Soup;