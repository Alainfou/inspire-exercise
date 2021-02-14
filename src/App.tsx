import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import ListItemView from './Views/ListItemView'; 
import { ItemView } from './Views/ItemView';

// "--jsx not set" error constantly...

interface List {
    items: Object,
    selectedItem: string
}

// ideally move the logic OUT of the "App"
class App extends React.Component<List> {

    constructor(props) {
        super(props);

        this.props.items = {};
        this.props.selectedItem = ""
    }

    componentDidMount() {
        console.log('[App.js] Calling API');
        axios.get(`https://inspirehep.net/api/literature/`)
            .then(res => {
                // Add error checking
                this.setState({ items: JSON.parse(res.data) });
            });
    }

    showSingleItem(newID: string) {
        axios.get(`https://inspirehep.net/api/literature/${newID}`)
            .then(res => {
                this.setState({ selectedItem: newID });
                // error checking
                // fill the rest of the Item View object's values
            });
    }

    render() {

        let singleItem = null;

        // On click on an item, add a transparent overlay on screen
        // and append a single item in the middle
        if (this.state.selectedItem !== "") {
            singleItem = (
                <div className="overlay">
                <ItemView
                    id={this.state.selectedItem}
                    clicked={hideSingleItem}
                    changed={this.nameChangedHandler}
                />
                </div>
            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        INSPIRE-HEP Exercise
                    </a>
                </header>

                <ListItemView
                    itemsList={this.state.items}
                    select={(id) => this.updateSelected(id)}
                    unselect={() => this.updatedSelected("")}
                />
                {singleItem}
            </div>
        );
    }
}

export default App;
