import React from 'react';
import PartItem from './PartItem';

const PartSelection = ({parts}) => {
    const renderedPanel = parts.map(part => {
        return <PartItem part={part}/>;
    })

    return(
        <div className='row '>
            {renderedPanel}
        </div>
    )
}

export default PartSelection;