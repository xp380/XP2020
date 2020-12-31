import React, { Component, Fragment } from 'react'

class Answer extends Component {
    state = {
        Answers: this.props.answer,
        Clickcheck: true,
        rightAnswer: this.props.rightAnswer
    }

    onAnswer = () => {
        this.setState({
            Clickcheck: false
        })
    };

    render() {
        return (
            <Fragment>
                {this.state.Clickcheck ? this.state.Answers.map(ans => {
                    return <button onClick={this.onAnswer}> {ans}</button>
                }) : <button> {this.state.rightAnswer}</button>}
            </Fragment>
        )
    }
}

export default Answer