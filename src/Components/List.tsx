import React from 'react';
import ListItem from './ListItem';
import ListItemInterface from '../Interfaces/ListItemInterface';

export interface ListProps {
    list: ListItemInterface[];
}

const List: React.FC<ListProps> = ({list}) => {
    return (
        <div className="List">
            {list.map( (item) => {
                return <ListItem key={item.id} item={item}/>
            } )}
        </div>
    )
}

export default List;