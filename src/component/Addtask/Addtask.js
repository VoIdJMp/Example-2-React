import React from "react";
import "./Addtask.css";

import DateAndTimePickers from "./Datepicker/Datepicker";

const Addtask = props => {
    let defDateTimeStart = '2017-05-24T10:30';
    let defDateTimeLabelStart = 'Время начало';

    let defDateTimeEnd = '2017-05-24T10:30';
    let defDateTimeLabelEnd = 'Время завершение';

    let onChangeDateTimeStart = (event) => {
        defDateTimeStart = event.target.value;
    };

    let onChangeDateTimeEnd = (event) => {
        defDateTimeEnd = event.target.value;
    };

    return (
        <div className={'mainAddTask'}>
            <div className="input-group mb-3">
                <input type="text" id="inpId" className="form-control" placeholder="Название задачи"
                       aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={() => props.onNewTask(
                                document.getElementById('inpId').value,
                                defDateTimeStart,
                                defDateTimeEnd
                            )}>
                        Добавить задачу
                    </button>
                </div>
            </div>
            <div className={'Timing'}>
                <DateAndTimePickers
                    defDateTime={defDateTimeStart}
                    defDateTimeLabel={defDateTimeLabelStart}
                    onDateTime={onChangeDateTimeStart}
                />
                <DateAndTimePickers
                    defDateTime={defDateTimeEnd}
                    defDateTimeLabel={defDateTimeLabelEnd}
                    onDateTime={onChangeDateTimeEnd}
                />
            </div>
        </div>
    );
};

export default Addtask
