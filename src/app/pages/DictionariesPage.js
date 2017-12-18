import React from 'react';
import { connect } from 'react-redux';
import { own } from '../actions/dictionaryActions';
import { Link } from 'react-router-dom';

class DictionariesPage extends React.Component {
  componentDidMount() {
    this.props.own();
  }

  onOpenDictionary = (id) => this.props.history.push(`/dictionary/${id}`);

  render() {
    return <div>
      <h3>Dictionaries</h3>
      <Link to='/dictionaries/search/'>Search</Link>
      <Link to='/create/dictionary/'>Create</Link>

      {this.props.dictionaries.map(d =>
        <p onClick={this.onOpenDictionary.bind(this, d.id)} key={d.id}>
          {d.name}
          </p>)}

    </div>;
  }
}

const mapStateToProps = ({ dictionaries }) => ({
  dictionaries: dictionaries.dictionaries
});

export default connect(mapStateToProps, { own })(DictionariesPage);