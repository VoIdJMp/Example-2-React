import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Todolist from "./container/Todolist/Todolist";
import Menubar from "./component/Menubar/Menubar";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Todolist />
                </Layout>
            </div>
        )
    }
}

export default App;
