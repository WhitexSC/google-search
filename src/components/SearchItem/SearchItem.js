import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PeopleAlsoAsk from "../PeopleAlsoAsk";

const useStyles = makeStyles((theme) => ({
  searchItem: {
    margin: `${theme.spacing(2)} 0`,
  },
  linkColour: {
    color: "#357a38",
  },
  row: {
    display: "flex",
  },
  iconButton: {
    padding: 0,
    color: "#357a38",
  },
}));

const SearchItem = ({ searchResults }) => {
  const classes = useStyles();

  const renderSearchItem =
    searchResults &&
    searchResults.items?.length > 0 &&
    searchResults.items.map((item, index) => {
      const showPeopleAlsoAsk = !!(index === 1);
      const renderItemWithPeopleAlsoAsk = (
        <>
          <PeopleAlsoAsk />
          <div key={index} className={classes.searchItem}>
            <Typography color="primary">{item.title}</Typography>
            <div className={classes.row}>
              <Typography className={classes.linkColour}>
                {item.displayLink}
              </Typography>
              <IconButton
                color="primary"
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <ArrowDropDownIcon />
              </IconButton>
            </div>
            <Typography>{item.snippet}</Typography>
          </div>
        </>
      );
      return showPeopleAlsoAsk ? (
        renderItemWithPeopleAlsoAsk
      ) : (
        <div key={index} className={classes.searchItem}>
          <Typography color="primary">{item.title}</Typography>
          <div className={classes.row}>
            <Typography className={classes.linkColour}>
              {item.displayLink}
            </Typography>
            <IconButton
              color="primary"
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <ArrowDropDownIcon />
            </IconButton>
          </div>
          <Typography>{item.snippet}</Typography>
        </div>
      );
    });

  return renderSearchItem;
};

export default SearchItem;
