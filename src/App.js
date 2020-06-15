import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Todolist from "./container/Todolist/Todolist";

import {Switch, Route} from 'react-router-dom'
import Showaddtask from "./container/Showaddtask/Showaddtask";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path='/add-task' component={ Showaddtask } />
                        <Route path='/' component={ Todolist } />
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App;
