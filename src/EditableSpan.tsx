import React, {useState} from 'react';

type PropsType = {
    title: string
}
export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)

    const editFoo = () => {
        setEdit(!edit)
    }
    return (
        edit
            ? <input value={props.title} onBlur={editFoo} autoFocus/>
            : <span onDoubleClick={editFoo}>{props.title}</span>
    );
};

