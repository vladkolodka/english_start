import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import ArticlePage from "../pages/ArticlePage";
import CoursePage from "../pages/CoursePage";
import ProfilePage from "../pages/ProfilePage";
import VideoPage from "../pages/VideoPage";
import VideosPage from "../pages/VideosPage";
import EditProfilePage from "../pages/EditProfilePage";
import DictionariesPage from "../pages/DictionariesPage";
import DictionaryPage from "../pages/DictionaryPage";
import GamePage from "../pages/GamePage";
import MyDictionariesPage from "../pages/MyDictionariesPage";
import SearchDictionariesPage from "../pages/SearchDictionariesPage";
import CreateDictionaryPage from "../pages/CreateDictionaryPage";
import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles";
import Align from '../components/Ailgn';
import Navigator from "../components/Navigator";
import LoginModal from "../components/LoginModal";
import { logout, tryGetUser, tryLogin } from "../actions/authActions";
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
    if (nextProps.location.hash === '#login' && this.state.modalOpened == false)
      this.setState({ modalOpened: true });
  }

  onLogin(login, password) {
    this.setState({ modalOpened: false });
    this.props.tryLogin(login, password);
  }

  componentDidMount() {
    this.props.tryGetUser();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LoginModal open={this.state.modalOpened} onClose={this.toggleLoginModal} onLogin={this.onLogin}/>

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu"
                        onClick={this.toggleDrawer}>
              <MenuIcon/>
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
              <LeftArrow/>
            </IconButton>
          </Align>
          <Link to='/courses'>Courses</Link>
          <Link to='/dictionaries'>Dictionaries</Link>
          <Link to='/videos'>Videos</Link>
          <Link to='/#login'>Login</Link>

          Drawer items
        </Drawer>

        <Paper className={classes.content}>
          <Navigator path={this.props.location.pathname}/>
          <Divider/>
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/article/:id' component={ArticlePage}/>
            <Route path='/course/:id' component={CoursePage}/>
            <Route path='/create/dictionary/' component={CreateDictionaryPage}/>
            <Route path='/video/:id' component={VideoPage}/>
            <Route path='/courses' component={CoursesPage}/>
            <Route path='/dictionaries/search/' component={SearchDictionariesPage}/>
            <Route path='/dictionaries' component={DictionariesPage}/>
            <Route path='/dictionary/:id' component={DictionaryPage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/userdictionaries' component={MyDictionariesPage}/>
            <Route path='/game/:id' component={GamePage}/>
            <PrivateRoute path='/editprofile' component={EditProfilePage}/>
            <Route paper='/videos/' component={VideosPage}/>
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
    width: 48,
    height: 48
  },
  content: {
    margin: 10
  }
});

const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized
});

export default connect(mapStateToProps, { tryLogin, logout, tryGetUser })
(withStyles(styles)(RootContainer));