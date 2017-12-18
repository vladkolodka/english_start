import React from 'react';
import { connect } from 'react-redux';
import { search, setLearnStatus } from '../actions/dictionaryActions';

class SearchDictionariesPage extends React.Component {
  state = {
    query: ''
  };

  onSearch = () => {
    this.props.search(this.state.query);
  };

  onLearn = (id) => {
    this.props.setLearnStatus(id, true);
    this.props.history.push('/dictionaries/')
  };

  render(){
    return <div>
      <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})}/>
      <button onClick={this.onSearch}>Search</button>

      {this.props.dictionaries.map(d =>
        <div>
          <p  key={d.id}>
            {d.name}
          </p>
          <button onClick={this.onLearn.bind(this, d.id)}>Learn</button>
        </div>)}


    </div>;
  }
}

const mapStateToProps = ({ dictionaries }) => ({
  dictionaries: dictionaries.dictionaries
});

export default connect(mapStateToProps, {search, setLearnStatus})(SearchDictionariesPage);