import React from 'react';
import PartItem from './PartItem';

const PartSelection = ({bodyparts}) => {
    const renderedPanel = bodyparts.map(bodypart => {
        return <PartItem bodypart={bodypart}/>;
    })

    return(
        <div className='row '>
            {renderedPanel}
        </div>
    )
}

export default PartSelection;