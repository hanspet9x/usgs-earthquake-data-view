import React from 'react';
import './index.scss';

interface Props {
    name: string;
    value: string;
}
const ProgressBar = (props: Props) => {
    return (
        <div className="progress-bar">
            <div>{props.name}</div>
            <progress max={100} value={20}  /> <b>{props.value}%</b>
        </div>
    );
};

export default ProgressBar;