import React, { useState } from 'react';
import Shamir from './Answers/Sérieuse.jpeg'
import Hilda from './Answers/Immature.png'
import Hawkeye from './Answers/Mature.jpeg'
import Sonya from './Answers/Fatale.jpeg'

import Cat from './Answers/Cat.jpeg'
import Nurse from './Answers/Nurse.jpeg'
import nemesis from './Answers/nemesis.png'
import Clown from './Answers/Clown.jpeg'


import Rick from './Answers/RaM.jpeg'

export default function Quiz() {
    const questions = [
        {
            questionText: 'Quel est le premier jeu de fire emblem ?',
            answerOptions: [
                { answerText: 'Shadow Dragon & the Blade of Light', isCorrect: true },
                { answerText: 'Three Houses', isCorrect: false },
                { answerText: 'Sacred Stones', isCorrect: false },
                {
                    answerText: 'Path of Radiance'
                    // <img src={avatar} style={{ width: 40, height: 40 }} alt="logo" />
                    , isCorrect: false
                },
            ],
        },
        {
            questionText: 'Qui est le créteur de ce site web ?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Vincent Kouoï', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'Quelle crise frappe en ce moment?',
            answerOptions: [
                { answerText: 'Covid 19', isCorrect: true },
                { answerText: 'Ebola', isCorrect: false },
                { answerText: 'Crise économique', isCorrect: false },
                { answerText: 'Sida', isCorrect: false },
            ],
        },
        {
            questionText: <img src={Rick} style={{ width: 500, height: 400 }} alt="logo" />,
            answerOptions: [
                { answerText: 'Rick and Morty', isCorrect: true },
                { answerText: 'Breaking Bad', isCorrect: false },
                { answerText: 'Shrek', isCorrect: false },
                { answerText: 'Mortal Kombat', isCorrect: false },
            ],
        },
        {
            questionText: 'Qui fait le plus peur ?',
            answerOptions: [
                { answerText: <img src={Cat} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: true },
                { answerText: <img src={Nurse} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: false },
                { answerText: <img src={nemesis} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: false },
                { answerText: <img src={Clown} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: false },
            ],
        },
        {
            questionText: 'Qui est le plus mature ?',
            answerOptions: [
                { answerText: <img src={Hilda} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: false },
                { answerText: <img src={Shamir} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: false },
                { answerText: <img src={Sonya} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: false },
                { answerText: <img src={Hawkeye} style={{ width: 400, height: 400 }} alt="logo" />, isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
        </div>
    );
}
