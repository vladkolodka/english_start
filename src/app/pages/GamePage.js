import React from 'react';
import { connect } from 'react-redux';
import { notLearned, setStages } from '../actions/wordActions';
import {Link} from 'react-router-dom';

const stages = {
  NOT_STARTED: 0,
  PLAYING: 1,
  FINISH: 2
};

class GamePage extends React.Component {
  state = {
    isLoading: false,
    stage: stages.NOT_STARTED,
    wordIndex: 0,
    showCorrect: false,
    answer: '',
    results: {}
  };

  onStart = () => {
    this.setState({ stage: stages.PLAYING, wordIndex: 0, isLoading: true, answer: '' });

    this.loadWords();
  };

  onNext = () => {
    const word = this.props.words[this.state.wordIndex];
    const isMatch = word.translation.toLowerCase() === this.state.answer.toLowerCase() && !this.state.showCorrect;

    if (!isMatch && !this.state.showCorrect) {
      this.setState({ showCorrect: true });
      return;
    }

    this.setState({
      showCorrect: false,
      answer: '',
      wordIndex: this.state.wordIndex + 1,
      results: {
        ...this.state.results,
        [word.id]: isMatch ? 1 : -1
      }
    });
  };

  onFinish = () => {
    this.props.setStages(this.state.results);

    this.setState({ stage: stages.NOT_STARTED, results: {}, showCorrect: false });
  };


  loadWords() {
    this.props.notLearned(this.props.match.params.id).then(count => {
      if (count === 0) this.setState({ stage: stages.FINISH, isLoading: false });
      else this.setState({ isLoading: false });
    });
  }

  render() {
    console.log(this.state);

    if (this.state.isLoading) return <span>Loading...</span>;

    return <div>
      {this.state.stage === stages.NOT_STARTED && this._renderNotStarted()}
      {this.state.stage === stages.PLAYING && this._renderPlaying()}
      {this.state.stage === stages.FINISH && this._renderFinished()}
    </div>;
  }

  _renderFinished() {
    return <div>
      <p>You learned all words from this dictionary.</p>
      <Link to={`/dictionary/${this.props.match.params.id}`}>Back to dictionary</Link>

    </div>;
  }

  _renderNotStarted() {
    return <button onClick={this.onStart}>Start</button>;
  }

  _renderPlaying() {
    if (this.state.wordIndex === this.props.words.length) return <button onClick={this.onFinish}>Finish</button>;

    return <div>
      <p>Number: {this.state.wordIndex + 1}</p>

      <span>{this.props.words[this.state.wordIndex].original} : </span>
      <input type="text" value={this.state.answer} onChange={e => this.setState({ answer: e.target.value })}/>

      <button onClick={this.onNext}>Next</button>

      {this.state.showCorrect &&
      <p>Correct: {this.props.words[this.state.wordIndex].translation}</p>
      }
    </div>;
  }

}

const mapStateToProps = ({ words }) => ({
  words
});

export default connect(mapStateToProps, { notLearned, setStages })(GamePage);