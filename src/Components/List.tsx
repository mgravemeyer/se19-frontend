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
        <>
            {list.map( (item) => {
                <ListItem item={item}/>
            } )}
        </>
    )
}

export default List;