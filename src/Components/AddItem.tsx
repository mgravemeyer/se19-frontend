import React from 'react';
import {useState} from 'react';

export interface AddButtonProps {
    addItem: Function
}

const AddItem: React.FC<AddButtonProps> = ({addItem}) => {

    const [inputText, setInputText] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if(!inputText) {
            alert('Please add a text')
            return
        }
        addItem(inputText)
        setInputText('')
        return
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input type='text' placeholder='Add Item' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            <input type='submit' value='Save Item'/>
        </form>
    )
}

export default AddItem;