import React from 'react';
import './assets/fonts.css';
import './App.css';
import {Board} from "./components/index";
import * as Sentry from '@sentry/react';

function App() {

    return (

        <div className="App">
            <header className="App-header">
                <Board></Board>
            </header>
        </div>
    );
}

export default Sentry.withProfiler(App);
