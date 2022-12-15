import React from 'react';

interface KeyValueProps {
    title: string;
    value: string;
}

// Display a key value (such as the buy in value £10) in the action color, with the title of the value (e.g. "buyin")
export const KeyValue : React.FC<KeyValueProps> = props  =>
    <div className="">
        <p className="text-action_strong text-lg font-bold text-center">
            {props.value}
        </p>

        <p className="text-white text-sm">
            {props.title}
        </p>
    </div>