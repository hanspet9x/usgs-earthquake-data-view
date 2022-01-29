import React from 'react';
import './index.scss';

interface Props {
    name: string;
    value: string;
}
const TextData = (props: Props) => {
    return (
        <div className="text-data">
            <small>{props.name}</small>
            <b>{props.value}</b>
        </div>
    );
};

export default TextData;