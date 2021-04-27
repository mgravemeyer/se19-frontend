import React from 'react';
import ListItemInterface from '../Interfaces/ListItemInterface';

interface ListItemProps {
    item: ListItemInterface
    removeItem: Function
}

const ListItem: React.FC<ListItemProps> = ({item, removeItem}) => {
    return (
        <>
            <div className="item">
                <p key={item.id} onClick={() => (removeItem(item.id))}>{item.name}</p>
            </div>
        </>
    )
}

export default ListItem;