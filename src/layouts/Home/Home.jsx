import React, { Component }from 'react';
import Highlighter from '../../containers/Highlighter';
import NotesDisplay from '../../containers/NotesDisplay';
import Header from '../../components/Header';

class Home extends Component {
    render() {
        return (
            <main>
                <Header />
                <Highlighter />
                <NotesDisplay />
            </main>
        );
    }
}

export default Home;
