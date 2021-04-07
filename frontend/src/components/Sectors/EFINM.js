import React from 'react'
import styles from './styles'

const EFINM = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efinm" onClick={() => clickHandler('efinm')}>
        <defs>
            <path d="M 88.422537 -124.197113 
            L 85.608102 -123.897758 
            L 85.600448 -123.897455 
            L 83.635893 -124.865219 
            L 80.901495 -126.202102 
            L 79.084761 -127.086461 
            L 77.729987 -133.702357 
            L 78.140408 -137.584865 
            L 84.515317 -138.987941 
            L 84.680073 -139.026706 
            L 83.638054 -152.208729 
            L 87.508172 -156.356488 
            L 91.981745 -159.08776 
            L 98.46316 -159.655291 
            L 103.118339 -155.646251 
            L 105.344355 -153.725471 
            L 107.565946 -151.80951 
            L 111.14707 -148.709117 
            L 111.766371 -141.562016 
            L 111.873146 -140.316136 
            L 115.927506 -134.590551 
            L 111.758263 -123.906009 
            L 98.042348 -125.183448 
            z
            " id="m4c6ce70a32" style={styles.lineStyle} />
        </defs>
        <g clipPath="url(#pc284ee2ed3)">
            <use style={styles.getFillStyle(color)}
                x="0" xlinkHref="#m4c6ce70a32" y="394.92" />
        </g>
    </g>
    )
}

export default EFINM
