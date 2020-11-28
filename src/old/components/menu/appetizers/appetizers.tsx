import React from "react";
import { Grid } from "@material-ui/core";
import * as Constants from "../../../assets/constants/menu-constants";
import Card from "../../card/card"

function Appetizers(props: any) {
    return (
        <Grid
            container
            direction="row"
            alignItems="flex-start"
            justify="center"
        >
            <Card
                title={Constants.DELUXE_NACHOS_TITLE}
                price={Constants.DELUXE_NACHOS_PRICE}
                content={Constants.DELUXE_NACHOS_CONTENT}
            />
            <Card
                title={Constants.NACHOS_TITLE}
                price={Constants.NACHOS_PRICE}
                content={Constants.NACHOS_CONTENT}
            />
            <Card
                title={Constants.PLAIN_CHEESE_NACHOS_TITLE}
                price={Constants.PLAIN_CHEESE_NACHOS_PRICE}
                content={Constants.PLAIN_CHEESE_NACHOS_CONTENT}
            />
            <Card
                title={Constants.QUESADILLA_TITLE}
                price={Constants.QUESADILLA_PRICE}
                content={Constants.QUESADILLA_CONTENT}
            />
            <Card
                title={Constants.SHRIMP_QUESADILLA_TITLE}
                price={Constants.SHRIMP_QUESADILLA_PRICE}
                content={Constants.SHRIMP_QUESADILLA_CONTENT}
            />
            <Card
                title={Constants.VEGGIE_QUESADILLA_TITLE}
                price={Constants.VEGGIE_QUESADILLA_PRICE}
                content={Constants.VEGGIE_QUESADILLA_CONTENT}
            />
            <Card
                title={Constants.CHEESE_CRISPI_SPECIAL_TITLE}
                price={Constants.CHEESE_CRISPI_SPECIAL_PRICE}
                content={Constants.CHEESE_CRISPI_SPECIAL_CONTENT}
            />
            <Card
                title={Constants.PLAIN_CHEESE_CRISPI_TITLE}
                price={Constants.PLAIN_CHEESE_CRISPI_PRICE}
                content={Constants.PLAIN_CHEESE_CRISPI_CONTENT}
            />
            <Card
                title={Constants.CAMARONES_CON_HONGOS_TITLE}
                price={Constants.CAMARONES_CON_HONGOS_PRICE}
                content={Constants.CAMARONES_CON_HONGOS_CONTENT}
            />
            <Card
                title={Constants.BOTANAS_LOS_CABOS_TITLE}
                price={Constants.BOTANAS_LOS_CABOS_PRICE}
                content={Constants.BOTANAS_LOS_CABOS_CONTENT}
            />
        </Grid>
    );
}

export default Appetizers;