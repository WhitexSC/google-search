import {
  Accordion,
  AccordionSummary,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const variants = [
  "What is a Google search results page?",
  "What do Google search results mean?",
  "What is SERP SEO?",
  "What is a snippet in Google?",
];

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `${theme.spacing(3)} 0`,
  },
  tabItem: {
    minWidth: "auto",
    fontSize: 13,
    textTransform: "capitalize",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const PeopleAlsoAsk = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {variants.map((el, index) => (
        <Accordion key={index}>
          <AccordionSummary
            aria-controls={`panel${index}a-content`}
            id="panel1a-header"
            expandIcon={index !== 0 && <ExpandMoreIcon />}
          >
            <Typography className={classes.heading} color="textSecondary">
              {el}
            </Typography>
          </AccordionSummary>
        </Accordion>
      ))}
    </div>
  );
};

export default PeopleAlsoAsk;
