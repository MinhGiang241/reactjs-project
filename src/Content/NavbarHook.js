import React, { Component, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles/NavbarStyle";
import { ThemeContext } from "./contexts/ThemeContextHook";
import { LanguageContext } from "./contexts/LanguageContextHook";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧",
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷",
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸",
  },
};

const Navbar = (props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            {language}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);