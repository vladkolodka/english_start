import React from 'react';
import { connect } from 'react-redux';
import { load } from '../actions/wordActions';

class DictionaryPage extends React.Component {
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  onPlayGame = () => {
    this.props.history.push(`/game/${this.props.dictionary.id}`)
  };

  render() {
    return <div>
      <h3>Dictionary "{this.props.dictionary.name}"</h3>

      {this.props.dictionary.learningStatus &&
        <button onClick={this.onPlayGame}>Play game</button>
      }
      {!this.props.dictionary.learningStatus &&
        <button onClick={this.onPlayGame}>Learn</button>
      }

      <h4>Words</h4>

      {this.props.words.map(w => <p key={w.id}>{w.original} : {w.translation} ({w.stage})</p>)}

    </div>;
  }
}

const mapStateToProps = ({ dictionaries, words }, props) => ({
  dictionary: dictionaries.dictionaries.find(d => d.id === props.match.params.id),
  words
});

export default connect(mapStateToProps, { load })(DictionaryPage);