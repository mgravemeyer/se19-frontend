import React from 'react';
import ListItemInterface from '../Interfaces/ListItemInterface';

export interface AddButtonProps {
    setList: React.Dispatch<React.SetStateAction<ListItemInterface[]>>
}

const AddItem: React.FC<AddButtonProps> = ({setList}) => {
    return (
        <div className="AddItem">
            <button onClick={() => setList}>

            </button>
        </div>
    )
}

export default AddItem;