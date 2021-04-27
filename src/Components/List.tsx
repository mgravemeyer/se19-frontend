import React from 'react';
import ListItem from './ListItem';
import ListItemInterface from '../Interfaces/ListItemInterface';

export interface ListProps {
    list: ListItemInterface[];
    removeItem: Function;
}

const List: React.FC<ListProps> = ({list, removeItem}) => {
    return (
        <div className="List">
            {list.map( (item) => {
                return <ListItem key={item.id} item={item} removeItem={removeItem}/>
            } )}
        </div>
    )
}

export default List;