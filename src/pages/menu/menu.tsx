import React from "react";
import { Grid, Button, makeStyles, AppBar, Tabs, Tab, Typography, Box, Card, CardContent, CardActions, Paper } from "@material-ui/core";
import { ReactComponent as Taco } from "../../assets/images/taco.svg";
import Image from "../../assets/images/green-background.svg"; 
// import classes from "*.module.css";


const styles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "var(--black)",
        color: "var(--white)",
    },
    container: {
        backgroundColor: "var(--black)",
        color: "var(--white)",
    },
    title: {
        color: "var(--white)",
        margin: "30px 0 0 30px",
    },
    text: {
        margin: "0 0 0 30px",
        padding: 0,
    },
    img: {
        padding: "0 20vh",
        width: "60vh",
        height: "60vh",
    }, 
    tab: {
        fontFamily: "Oswald-Regular",
        '&:hover': {
            color: "var(--secondary)",
            opacity: 1,
        },
        '&$selected': {
            color: "var(--secondary)"
        },
        '&:focus': {
            color: "var(--secondary)"
        },
        '&:active': {
            color: "var(--secondary)"
        },
        '&:blur': {
            color: "var(--secondary)"
        },
    },
    indicator: {
        display: "none",
        color: "var(--secondary)",
    },
    select: {
        color: "var(--secondary)",
    },
    food: {
        backgroundColor: "var(--secondary)",
        color: "var(--white)",
        fontFamily: "Oswald-Regular",
        margin: 10,
    },
    content: {
        fontSize: 12,
    },
    tabContainer: {
        display: "flex",
        flexWrap: "wrap",
        // margin: 10,
    },
    hello: {
        backgroundColor: "var(--black)",
        width: "100%",
        
    }
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const classes = styles();
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
        className={classes.tabContainer}
      >
        {value === index && (
          <Box p={3}>{children}</Box>
        )}
      </div>
    );
}
  
  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

function Menu() {
    const classes = styles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };  

    return (
        <Grid
            className={classes.root}
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
        >  
        <div className={classes.hello}>
        <h1 className={classes.title}>Menu</h1>

        </div>
            <Grid
                
                container
                direction="row"
                alignItems="center"
                justify="space-between"
            >  
                <AppBar position="static" color="default" className={classes.container}> 
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        classes={{ indicator: classes.indicator }}
                    >
                        <Tab classes={{selected: classes.select}} className={classes.tab} label="Appetizers" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="Soups/Salads" {...a11yProps(1)} />
                        <Tab className={classes.tab} label="Sides" {...a11yProps(2)} />
                        <Tab className={classes.tab} label="Main Courses" {...a11yProps(3)} />
                        <Tab className={classes.tab} label="Combos" {...a11yProps(4)} />
                        <Tab className={classes.tab} label="Lunch" {...a11yProps(5)} />
                        <Tab className={classes.tab} label="Fajitas" {...a11yProps(6)} />
                        <Tab className={classes.tab} label="Burritos" {...a11yProps(3)} />
                        <Tab className={classes.tab} label="Enchiladas Grandes" {...a11yProps(4)} />
                        <Tab className={classes.tab} label="Dessert" {...a11yProps(5)} />
                        <Tab className={classes.tab} label="Drinks" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="flex-start"
                >  
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    <Card className={classes.food} variant="outlined">
                        <CardContent>
                            <h2>Deluxe Nachos</h2>
                            <p className={classes.content}>Corn chips topped with melted cheese, refried beans,<br/>fresh tomato, onion, guacamole, & sour cream, 11.50.<br/>With ground beef or chicken, 12.50.</p>
                        </CardContent>
                    </Card>
                    </Grid>
                
                    
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel>
            </Grid>
        </Grid>
    )
}

export default Menu;



