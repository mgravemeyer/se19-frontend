import React from 'react';

interface ListItemProps {
    item: ListItemInterface
}

interface ListItemInterface {
    id: string
    name: string
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
    return (
        <>
            <p key={item.id}>{item.name}</p>
        </>
    )
}

export default ListItem;