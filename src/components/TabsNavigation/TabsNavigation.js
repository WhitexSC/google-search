import React from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabItem: {
    minWidth: "auto",
    fontSize: 13,
    textTransform: "capitalize",
  },
}));

const TabsNavigation = () => {
  const classes = useStyles();

  return (
    <Tabs value={0} aria-label="search-type-navigation-example">
      <Tab className={classes.tabItem} label="All" />
      <Tab className={classes.tabItem} disabled label="Images" />
      <Tab className={classes.tabItem} disabled label="News" />
      <Tab className={classes.tabItem} disabled label="Videos" />
      <Tab
        className={classes.tabItem}
        disabled
        style={{ marginRight: "auto" }}
        label="More"
      />
      <Tab className={classes.tabItem} disabled label="Settings" />
      <Tab className={classes.tabItem} disabled label="Tools" />
    </Tabs>
  );
};

export default TabsNavigation;
