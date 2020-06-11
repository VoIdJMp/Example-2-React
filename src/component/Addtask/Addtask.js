import React from "react";

const Addtask = props => (
    <div className="input-group mb-3">
        <input type="text" id="inpId" className="form-control" placeholder="Название задачи" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => props.onNewTask(document.getElementById('inpId').value)}>Добавить задачу</button>
        </div>
    </div>
);

export default Addtask
