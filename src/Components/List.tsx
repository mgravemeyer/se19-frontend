import React from 'react';

export interface ListProps {
    list: ListItem[];
}

interface ListItem {
    id: string
    name: string
}

const List: React.FC<ListProps> = ({list}) => {
    return (
        <>
            {list.map( (items) => {

            } )}
        </>
    )
}

export default List;