import React from 'react'
import styles from './styles'

const EFING = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efing" onClick={() => clickHandler('efing')}>
      <defs>
        <path d="M 18.838279 -140.209323
            L 20.204334 -146.127847
            L 20.244894 -146.652906
            L 20.387942 -148.1556
            L 22.896549 -158.74392
            L 25.069562 -168.56399
            L 30.506623 -175.925673
            L 30.969932 -176.421887
            L 31.730606 -177.334063
            L 34.59112 -178.675795
            L 36.599219 -179.443633
            L 38.335011 -180.1245
            L 38.582884 -180.198614
            L 40.050793 -180.750748
            L 40.181801 -180.816632
            L 41.797332 -181.428813
            L 42.669904 -181.760712
            L 43.538032 -183.313318
            L 43.721501 -183.633912
            L 45.156627 -186.200782
            L 54.803111 -176.891746
            L 55.805295 -176.009005
            L 58.56725 -173.575126
            L 59.608756 -172.656493
            L 74.870746 -159.574717
            L 83.638054 -152.208729
            L 84.680073 -139.026706
            L 84.515317 -138.987941
            L 78.140408 -137.584865
            L 77.729987 -133.702357
            L 79.084761 -127.086461
            L 80.901495 -126.202102
            L 83.635893 -124.865219
            L 85.600448 -123.897455
            L 85.608102 -123.897758
            L 85.905173 -113.671996
            L 81.086609 -111.258797
            L 78.473362 -109.945158
            L 76.715609 -109.064254
            L 75.803489 -108.915432
            L 69.11665 -107.836553
            L 68.175022 -107.724509
            L 64.982947 -107.32823
            L 64.630176 -107.519893
            L 62.481012 -108.671373
            L 58.701266 -110.707791
            L 59.195763 -119.914571
            L 58.528458 -119.726084
            L 56.848947 -120.923882
            L 55.459014 -121.912211
            L 52.415943 -124.075525
            L 46.174379 -128.499853
            L 44.022387 -130.019992
            L 38.492759 -128.019417
            L 20.772151 -138.989689
            z
            " id="mb4ec8a5ef2" style={styles.lineStyle} />
      </defs>
      <g clipPath="url(#pc284ee2ed3)">
        <use style={styles.getFillStyle(color)}
          x="0" xlinkHref="#mb4ec8a5ef2" y="394.92" />
      </g>
    </g>
  )
}

export default EFING
