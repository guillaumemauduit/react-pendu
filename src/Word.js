import React from 'react'

import './Word.css'

const Word = ({word}) => (
    <div className="word">
        <span>
            { word }
        </span>
    </div>
)

export default Word