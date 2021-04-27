import React from 'react';
import ListItemInterface from '../Interfaces/ListItemInterface';

interface ListItemProps {
    item: ListItemInterface
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
    return (
        <>
            <p key={item.id}>{item.name}</p>
        </>
    )
}

export default ListItem;