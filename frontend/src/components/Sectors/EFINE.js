import React from 'react'
import styles from './styles'

const EFINE = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efine" onClick={() => clickHandler('efine')}>
      <defs>
        <path d="M 55.390879 -81.8699
            L 52.029153 -81.047766
            L 48.919726 -80.284594
            L 41.574113 -88.129159
            L 41.060825 -92.869142
            L 41.643965 -93.785739
            L 44.339012 -98.001109
            L 49.188479 -98.790084
            L 52.011451 -99.252226
            L 54.137891 -99.272547
            L 62.481012 -108.671373
            L 64.630176 -107.519893
            L 64.982947 -107.32823
            L 68.175022 -107.724509
            L 69.11665 -107.836553
            L 75.803489 -108.915432
            L 76.715609 -109.064254
            L 78.473362 -109.945158
            L 81.086609 -111.258797
            L 85.905173 -113.671996
            L 87.010251 -104.484768
            L 87.472504 -100.634818
            L 85.011249 -99.183111
            L 83.235116 -96.583583
            L 79.096873 -90.528489
            L 78.619586 -87.748593
            L 63.895691 -83.935116
            L 55.41049 -81.878132
            z
            " id="mc7f8558e83" style={styles.lineStyle} />
      </defs>
      <g clipPath="url(#pc284ee2ed3)">
        <use style={styles.getFillStyle(color)}
          x="0" xlinkHref="#mc7f8558e83" y="394.92" />
      </g>
    </g>
  )
}

export default EFINE
