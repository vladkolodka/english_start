import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };
    }

    handleChange(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
            })
        }
    }

    render() {
        return (
            <Dialog open={this.props.open} onRequestClose={this.props.onClose}>
                <DialogTitle>Sign In</DialogTitle>
                <div className={this.props.classes.container}>
                    <TextField fullWidth
                        id="login"
                        label="Name"
                        value={this.state.login}
                        onChange={this.handleChange('login')}
                        margin="normal"
                    />
                    <TextField fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <Button raised onClick={() => this.props.onLogin(this.state.login, this.state.password)}>
                        Sign in
                  </Button>
                </div>
            </Dialog>
        );
    }
}

const styles = {
    container: {
        padding: '0 10px 10px  10px'
    }
};

export default withStyles(styles)(LoginModal);