import React from 'react';
import { connect } from 'react-redux';
import { own } from '../actions/dictionaryActions';

class DictionariesPage extends React.Component {
  componentDidMount() {
    this.props.own();
  }


  render() {
    return <div>
      <h3>Dictionaries</h3>

      {this.props.dictionaries.map(d => <p key={d.id}>{d.name}</p>)}

    </div>;
  }
}

const mapStateToProps = ({ dictionaries }) => ({
  dictionaries: dictionaries.dictionaries
});

export default connect(mapStateToProps, { own })(DictionariesPage);