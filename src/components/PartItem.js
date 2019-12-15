import './PartItem.css'
import React from 'react';

const PartItem = ({bodypart,onTermSubmit}) => {

const bodyImg= `/img/${bodypart}.png`;
const bodyTerm=`${bodypart} workout`;

return(
    <div className='col-4 text-center part-item' ><img className='img-fluid' src={bodyImg} onClick={()=>onTermSubmit(bodyTerm)} alt={bodypart}/>
    </div>
)
}

export default PartItem;