import React, {Component} from "react";
import "./Todolist.css";
import Addtask from "../../component/Addtask/Addtask";
import Showtasks from "../../component/Showtasks/Showtasks";
import Edittask from "../../component/Edittask/Edittask";

class Todolist extends Component {
    state = {
        tasks: [
            { id: 1, name: 'Task 1', start_time: '2017-05-24T10:30', end_time: '2017-05-24T10:30' }
        ],
        statusAddTask: true,
        curTaskIdForEdit: 1,
        curTaskValForEdit: ''
    };

    onAddTask = (new_val, cmtStart, cmtEnd) => {
        let tasks = this.state.tasks;
        tasks.push({ id: tasks.length + 1,  name: new_val, start_time: cmtStart, end_time: cmtEnd });
        this.setState( { tasks } );
    };

    onEditTask = (idx, prev_val) => {
        this.setState({
            statusAddTask: false,
            curTaskIdForEdit: idx,
            curTaskValForEdit: prev_val
        });
    };

    onEditChangeTask = (idx, new_val) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.map( data => {
            return (data.id === idx) ? {
                id: data.id,
                name: new_val
            } : data;
        });
        this.setState({
            tasks,
            statusAddTask: true
        })
    };

    deleteTask = (idx) => {
        let tasks = [...this.state.tasks];
        tasks.splice(idx - 1, 1);
        this.setState({ tasks })
    };

    render() {
        return (
            <div className="container">
                {this.state.statusAddTask
                    ?
                        <Addtask
                            onNewTask={this.onAddTask}
                        />
                    :
                        <Edittask
                            curId={ this.state.curTaskIdForEdit }
                            curVal={ this.state.curTaskValForEdit }
                            onTaskChange={ this.onEditChangeTask }
                        />
                }
                <Showtasks
                    tasks={this.state.tasks}
                    onTaskEdit={this.onEditTask}
                    onDeleteTask={this.deleteTask}
                />
            </div>
        );
    }
}

export default Todolist;
