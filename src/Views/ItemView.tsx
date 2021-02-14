import React from 'react';

import './Views.css';

interface Props {
    id: string;
    text: string;
    author: string;
}

export const ItemView: React.FC<Props> = () => {

    return (
        <div className='Item'>
            <p onClick={this.props.click}> </p>
            <p>{this.props.id} </p>
        </div>
    );
}
