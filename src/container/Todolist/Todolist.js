import React, {Component} from "react";
import './Todolist.css';
import Addtask from "../../component/Addtask/Addtask";
import Showtasks from "../../component/Showtasks/Showtasks";

class Todolist extends Component {
    state = {
        tasks: [
            { id: 1, name: 'Task 1' }
        ]
    };
    onAddTask = (new_val) => {
        let tasks = this.state.tasks;
        tasks.push({ id: tasks.length + 1,  name: new_val });
        this.setState( tasks );
    };

    render() {
        return (
            <div className="container">
                <Addtask
                    onNewTask={this.onAddTask}
                />
                {this.state.tasks.map( (value, index) => {
                    return (
                        <Showtasks
                            key={index}
                            tasks={value}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Todolist;
