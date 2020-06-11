import React from "react";
import "./Showtasks.css"

const Showtasks = props => {

    return (
        <div className={'mainCard'}>
            <h4 className={'titleTask'}>{props.tasks.name}</h4>
            <button className={'btn btn-primary'}>Редактировать</button>
            <button className={'btn btn-danger'}>Удалить</button>
        </div>
    );
};

export default Showtasks
