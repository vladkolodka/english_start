import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles";
import Align from '../components/Ailgn';

// material components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LeftArrow from 'material-ui-icons/KeyboardArrowLeft';
import Drawer from 'material-ui/Drawer';

class RootContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpened: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu"
              onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              EnglishStart
              </Typography>
            <Button color="contrast">Sign In</Button>
            <Button color="contrast">Sign Up</Button>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.drawerOpened} onRequestClose={this.toggleDrawer}
          classes={{
            paper: classes.drawer
          }}>
          <Align>
            <IconButton color="primary" aria-label="Menu" classes={{
              icon: classes.closeDrawerIcon
            }}
              onClick={this.toggleDrawer}>
              <LeftArrow />
            </IconButton>
          </Align>
          Drawer items
        </Drawer>

        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/courses' component={CoursesPage} />
        </Switch>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: '20%'
  },
  closeDrawerIcon: {
    float: 'right',
    width: 50,
    height: 50
  }
});

export default connect(null, null)(withStyles(styles)(RootContainer));