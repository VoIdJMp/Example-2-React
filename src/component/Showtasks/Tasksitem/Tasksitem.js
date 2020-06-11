import React from "react";
import "./Tasksitem.css"

const Tasksitem = props => {
    return (
        <div className={'mainCard'}>
            <h4 className={'titleTask'}>{props.tasks.name}</h4>
            <hr />
            <strong>Время начало:</strong>
            <h5 className={'titleTask'}>{props.tasks.start_time}</h5>
            <br />
            <strong>Время завершение:</strong>
            <h5 className={'titleTask'}>{props.tasks.end_time}</h5>
            <hr />
            <button className={'btn btn-primary'} onClick={() => props.onTaskEdit(props.tasksId, props.tasks.name)}>Редактировать</button>
            <button className={'btn btn-danger'} onClick={() => props.onDeleteTask(props.tasksId)}>Удалить</button>
        </div>
    );
};

export default Tasksitem
