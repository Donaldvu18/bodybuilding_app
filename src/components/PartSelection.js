import React from 'react';
import PartItem from './PartItem';

const PartSelection = ({bodyparts,onTermSubmit}) => {
    const renderedPanel = bodyparts.map(bodypart => {
        return <PartItem onTermSubmit={onTermSubmit} bodypart={bodypart}/>;
    })

    return(
        <div className='row'>
            {renderedPanel}
        </div>
    )
}

export default PartSelection;