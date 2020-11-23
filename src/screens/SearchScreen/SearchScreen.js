import {
  AppBar,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import Search from "../../components/Search";
import { googleSearch } from "../../utils/api";
import TabsNavigation from "../../components/TabsNavigation";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchItem from "../../components/SearchItem";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
  },
  row: {
    display: "flex",
  },
  paper: {
    width: "50%",
  },
  toolbar: {
    position: "sticky",
    boxShadow:
      "0px 0px 4px -1px rgba(0,0,0,0.2), 0px -2px 9px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.02)",
  },
  contentContainer: {
    padding: `0 ${theme.spacing(3)}`,
  },
  statistic: {
    marginTop: theme.spacing(1),
  },
}));

const SearchScreen = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setIsLoading(true);
      googleSearch(query)
        .then((res) => {
          if (!!res) {
            setSearchResults(res);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("googleSearch err", err);
          setIsLoading(false);
        });
    }
  };

  return (
    <Container maxWidth="xl" disableGutters className={classes.container}>
      <AppBar color="#e8eaf6" className={classes.toolbar}>
        <Toolbar>
          <Grid container>
            <Grid item xs={2} style={{ marginRight: "auto" }}>
              <img
                src={
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png"
                }
                alt="Google Logo"
                style={{
                  // margin: "0 auto",
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <Search
                value={searchQuery}
                onSearch={(query) => handleSearch(query)}
              />
            </Grid>
            <Grid
              container
              item
              xs={3}
              className={classes.row}
              justifyContent="flex-end"
            >
              <IconButton>
                <ViewComfyIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar style={{ minHeight: "auto" }}>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={7}>
              <TabsNavigation />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.contentContainer}>
        <Grid item xs={2} />
        <Grid item xs={7}>
          {searchResults && searchQuery && (
            <Typography color="textSecondary" className={classes.statistic}>
              About {searchResults.searchInformation.formattedTotalResults}{" "}
              results ({searchResults.searchInformation.formattedSearchTime}{" "}
              seconds)
            </Typography>
          )}
          {<SearchItem searchResults={searchResults} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchScreen;
