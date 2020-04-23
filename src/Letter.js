import React from 'react'

import './Letter.css'

const Letter = ({letter, index, used, onClick}) => (
    <div className={`letter ${used}`} onClick={() => onClick(index)}>
        <span>
            { letter }
        </span>
    </div>
)

export default Letter
