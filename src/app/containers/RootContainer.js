import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import ArticlePage from "../pages/ArticlePage";
import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles";
import Align from '../components/Ailgn';
import Navigator from "../components/Navigator";
import LoginModal from "../components/LoginModal";

// material components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LeftArrow from 'material-ui-icons/KeyboardArrowLeft';
import Drawer from 'material-ui/Drawer';
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";

class RootContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpened: false,
      modalOpened: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  toggleDrawer() {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  }

  toggleLoginModal() {
    this.setState({ modalOpened: !this.state.modalOpened });
  }

  onTitleClick() {
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LoginModal open={this.state.modalOpened} onClose={this.toggleLoginModal} />

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu"
              onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex} onClick={this.onTitleClick}>
              EnglishStart
              </Typography>
            <Button color="contrast" onClick={this.toggleLoginModal}>Sign In</Button>
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
          <Link to='/courses'>Cources</Link>

          Drawer items
        </Drawer>

        <Paper className={classes.content}>
          <Navigator path={this.props.location.pathname} />
          <Divider />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/article/:id' component={ArticlePage} />
            <Route path='/courses' component={CoursesPage} />
          </Switch>
        </Paper>
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
    cursor: 'pointer'
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
  },
  content: {
    margin: 10
  }
});

export default connect(null, null)(withStyles(styles)(RootContainer));