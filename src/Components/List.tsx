import React from 'react';
import ListItem from './ListItem';

export interface ListProps {
    list: ListItemInterface[];
}

interface ListItemInterface {
    id: string
    name: string
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