import React from 'react';
import { connect } from 'react-redux';
import { create } from '../actions/dictionaryActions';

class CreateDictionaryPage extends React.Component {
  state = {
    name: '',
    description: '',
    sourceLanguage: '',
    isPublic: true
  };

  onCreate = () => {
    this.props.create(this.state);
    this.props.history.push('/dictionaries/');
  };

  render() {
    return <div>
      Name
      <input type="text" value={this.state.name}
             onChange={e => this.setState({ name: e.target.value })}
      />
      Description
      <input type="text" value={this.state.description}
             onChange={e => this.setState({ description: e.target.value })}
      />
      Language
      <input type="text" value={this.state.sourceLanguage}
             onChange={e => this.setState({ sourceLanguage: e.target.value })}
      />
      <button onClick={this.onCreate}>
        Create
      </button>
    </div>;
  }

}

const mapStateToProps = ({ /*dictionaries*/ }) => ({
  // dictionaries: dictionaries.dictionaries
});

export default connect(mapStateToProps, { create })(CreateDictionaryPage);