import React from "react";
import "./Showtasks.css"
import Tasksitem from "./Tasksitem/Tasksitem";

const Showtasks = props => {
    return (
        <div className={'tasksBlock'}>
                {props.tasks.map( (value, index) => {
                    return (
                            <Tasksitem
                                key={index}
                                tasksId={index + 1}
                                tasks={value}
                                onTaskEdit={props.onTaskEdit}
                                onDeleteTask={props.onDeleteTask}
                            />
                    )
                })}
        </div>
    );
};

export default Showtasks
