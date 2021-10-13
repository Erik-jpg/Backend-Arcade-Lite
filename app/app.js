import { useState } from 'react';
import getScoreDisplay from './components/ScoreDisplayComponent';
import postScoreInput from './components/ScoreInput';
import { ApolloServer }from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import {client } from './services/scoreGQL';

function App() {
    const [inputState, serInputState] = useState('');
    const [scoreDisplay, setScoreDisplay] = useState('');

    return (
        <>
        <ApolloProvider client={client}>
            <scoreInput inputState={inputState}
            setInputState={setInputState} />
            <
        </ApolloProvider>
    )
}

{/* pulls from  */}