import React from 'react'
import styles from './styles'

const EETTFED = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_eettfed" onClick={() => clickHandler('eettfed')}>
      <defs>
        <path d="M 99.273636 -75.847251
          L 101.640073 -75.750904
          L 102.094231 -75.734312
          L 102.439565 -72.627024
          L 102.611952 -71.046764
          L 98.995414 -62.839242
          L 92.807497 -64.835893
          L 92.00022 -66.379076
          L 91.436513 -67.310085
          L 90.961959 -68.229486
          L 93.76685 -75.266465
          L 93.920886 -75.289171
          L 96.870529 -75.724576
          L 97.999236 -75.896626
          L 98.030954 -75.89814
          z
          " id="m63340bb010" style={styles.lineStyle} />
      </defs>
      <g clipPath="url(#pc284ee2ed3)">
        <use style={styles.getFillStyleEE(color)} x="0"
          xlinkHref="#m63340bb010" y="394.92" />
      </g>
    </g>
  )
}

export default EETTFED