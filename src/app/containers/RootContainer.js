import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import ArticlePage from "../pages/ArticlePage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import DictionariesPage from "../pages/DictionariesPage";
import MyDictionariesPage from "../pages/MyDictionariesPage";
import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles";
import Align from '../components/Ailgn';
import Navigator from "../components/Navigator";
import LoginModal from "../components/LoginModal";
import { tryLogin } from "../actions/authActions";
const { logout } = require('../actions/authActions').Creators;
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
      modalOpened: props.location.hash == '#login' ? true : false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.onLogin = this.onLogin.bind(this);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.hash == '#login' && this.state.modalOpened == false)
      this.setState({ modalOpened: true });
  }

  onLogin(login, password) {
    this.setState({ modalOpened: false });
    this.props.tryLogin(login, password);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LoginModal open={this.state.modalOpened} onClose={this.toggleLoginModal} onLogin={this.onLogin} />

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu"
              onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex} onClick={this.onTitleClick}>
              EnglishStart
              </Typography>

            {this.props.isAuthorized ?
              <Button color="contrast" onClick={this.props.logout}>Logout</Button>
              : <div>
                <Button color="contrast" onClick={this.toggleLoginModal}>Sign In</Button>
                <Button color="contrast">Sign Up</Button>
              </div>
            }
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
          <Link to='/#login'>Login</Link>

          Drawer items
        </Drawer>

        <Paper className={classes.content}>
          <Navigator path={this.props.location.pathname} />
          <Divider />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/article/:id' component={ArticlePage} />
            <Route path='/courses' component={CoursesPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/editprofile' component={EditProfilePage} />
            <Route path='/dictionaries' component={DictionariesPage} />
            <Route path='/userdictionaries' component={MyDictionariesPage} />
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

const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized
});

export default connect(mapStateToProps, { tryLogin, logout })
  (withStyles(styles)(RootContainer));