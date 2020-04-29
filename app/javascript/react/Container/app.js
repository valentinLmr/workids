import React, { Component } from 'react';
import Hello from '../Component/hello'

class App extends Component {

    render ()  {
            return (
            <div>
                <Hello/>
                <h3> ajout d'un fichier app </h3>
                <p>j'espère que ca va marcher</p>
            </div>
        )
    }
}

export default App