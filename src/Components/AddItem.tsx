import React from 'react';
import ListItemInterface from '../Interfaces/ListItemInterface';

export interface AddButtonProps {
    addItem: Function
}

const AddItem: React.FC<AddButtonProps> = ({addItem}) => {
    return (
        <div className="AddItem">
            <button onClick={() => addItem()}>

            </button>
        </div>
    )
}

export default AddItem;