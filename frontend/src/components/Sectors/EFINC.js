import React from 'react'
import styles from './styles'

const EFINC = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efinc" onClick={() => clickHandler('efinc')}>
      <defs>
        <path d="M 77.569947 -81.598946
            L 77.310376 -80.069485
            L 77.116928 -78.930811
            L 77.033252 -78.445219
            L 32.363651 -52.802308
            L 32.154434 -53.030753
            L 31.571494 -53.676994
            L 31.414766 -53.842577
            L 29.509474 -55.941835
            L 27.889594 -57.705003
            L 27.06334 -58.607448
            L 25.605121 -60.192564
            L 23.817017 -62.137555
            L 23.713864 -62.248846
            L 23.527461 -62.455436
            L 22.049847 -64.046475
            L 21.931238 -64.181782
            L 21.860067 -64.261347
            L 21.694008 -64.444498
            L 22.632882 -64.69463
            L 35.431297 -68.119215
            L 59.042538 -74.307753
            z
            " id="mcc025c344f" style={styles.lineStyle} />
      </defs>
      <g clipPath="url(#pc284ee2ed3)">
        <use style={styles.getFillStyle(color)}
          x="0" xlinkHref="#mcc025c344f" y="394.92" />
      </g>
    </g>
  )
}

export default EFINC
