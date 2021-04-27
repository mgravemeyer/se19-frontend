import React from 'react';
import ListItem from './ListItem';
import ListItemInterface from '../Interfaces/ListItemInterface';

export interface ListProps {
    list: ListItemInterface[];
    setList: React.Dispatch<React.SetStateAction<ListItemInterface[]>>
}

const List: React.FC<ListProps> = ({list, setList}) => {
    return (
        <div className="List">
            {list.map( (item) => {
                return <ListItem key={item.id} item={item}/>
            } )}
        </div>
    )
}

export default List;