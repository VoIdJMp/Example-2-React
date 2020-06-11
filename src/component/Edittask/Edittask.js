import React from "react";

const Edittask = props => (
    <div className="input-group mb-3">
        <input type="text" id="inpId" className="form-control" placeholder="новое название задачи"
               aria-describedby="button-addon2" defaultValue={props.curVal} />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                    onClick={() => props.onTaskChange(props.curId, document.getElementById('inpId').value)}>Сохранить задачу</button>
        </div>
    </div>
);

export default Edittask;
