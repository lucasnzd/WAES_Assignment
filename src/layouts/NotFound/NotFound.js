import React, { Component }from 'react';
import Header from '../../components/Header';

class NotFound extends Component {
    render() {
        return (
            <main>
                <Header />
                <div>
                    Sorry, it wasn't possible to reach that url :( 
                </div>
            </main>
        );
    }
}

export default NotFound;
