import React from 'react';
import { render } from 'react-dom';
import ItemView from './ItemView';

import './Views.css';

interface ListProps {
    id: string;
    item: Object
}

interface APIList {
    items: Object
}

interface SingleItem {
    id: string;
    text: string;
    author: string;
    date: string;
}

export const ListItemView = ({ items }: APIList) => {

    return (
        <div className='List'>
            this.state.items.map(item => {
                return (<ItemView
                    {item.toString()}
                />)
            }
        </div>
    );
}

// use memo to avoid rerendering the whole list everytime anything changes
export default React.memo(ListItemView);
