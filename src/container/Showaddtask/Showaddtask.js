import React, { Component } from "react";
import Addtask from "../../component/Addtask/Addtask";

class Showaddtask extends Component{
    render() {
        return (
            <div>
                <Addtask
                    onNewTask={this.onAddTask}
                />
            </div>
        )
    }
}

export default Showaddtask;
