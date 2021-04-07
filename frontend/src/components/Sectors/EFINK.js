import React from 'react'
import styles from './styles'

const EFINK = ({ active, clickHandler }) => {

  return (
    <g className='sector' id="sec_efink" onClick={() => clickHandler('efink')}>
        <defs>
            <path d="M 85.608102 -123.897758 
            L 88.422537 -124.197113 
            L 98.042348 -125.183448 
            L 111.758263 -123.906009 
            L 101.073106 -100.801887 
            L 98.988421 -102.268424 
            L 98.907581 -102.328233 
            L 89.077651 -101.577677 
            L 87.472504 -100.634818 
            L 87.010251 -104.484768 
            L 85.905173 -113.671996 
            z
            " id="mc9b10cbcc3" style={styles.lineStyle} />
        </defs>
        <g clipPath="url(#pc284ee2ed3)">
            <use style={styles.getFillStyle(active)}
                x="0" xlinkHref="#mc9b10cbcc3" y="394.92" />
        </g>
    </g>
    )
}

export default EFINK
