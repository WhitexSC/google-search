import React from "react";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    height: "100%",
  },
  paper: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  iconButton: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    margin: "auto 0",
    height: "100%",
  },
}));

const Search = ({ value = null, onSearch = () => {} }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <InputBase
        onChange={(e) => onSearch(e.target.value)}
        value={value || ""}
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search example" }}
        fullWidth
      />
      <IconButton
        color="primary"
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
