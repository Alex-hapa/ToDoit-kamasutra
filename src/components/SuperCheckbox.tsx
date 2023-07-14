import React, {ChangeEvent} from 'react';
import {Checkbox} from '@mui/material';

type PropsType = {
    callBack: (changeEvent:boolean) => void
    isDone: boolean
}

export const SuperCheckbox:React.FC<PropsType> = ({isDone,callBack}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      callBack(event.currentTarget.checked)
    }
    return (
        <Checkbox
            checked={isDone}
            color="primary"
            onChange={onChangeHandler}
        />
    );
};

