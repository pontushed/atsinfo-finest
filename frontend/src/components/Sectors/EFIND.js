import React from 'react'
import styles from './styles'

const EFIND = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efind" onClick={() => clickHandler('efind')}>
      <defs>
        <path d="M 16.987187 -71.180422
            L 20.875698 -73.82338
            L 26.279442 -75.02027
            L 40.606104 -78.392322
            L 48.919726 -80.284594
            L 52.029153 -81.047766
            L 55.390879 -81.8699
            L 55.41049 -81.878132
            L 63.895691 -83.935116
            L 78.619586 -87.748593
            L 78.359363 -86.208095
            L 77.832441 -83.137156
            L 77.637962 -81.941871
            L 77.569947 -81.598946
            L 59.042538 -74.307753
            L 35.431297 -68.119215
            L 22.632882 -64.69463
            L 21.694008 -64.444498
            L 21.472593 -64.683451
            L 20.579858 -65.978953
            L 19.971288 -66.861828
            L 18.870086 -68.461845
            L 17.819125 -70.03916
            z
            " id="m7e6aa7eb8b" style={styles.lineStyle} />
      </defs>
      <g clipPath="url(#pc284ee2ed3)">
        <use style={styles.getFillStyle(color)}
          x="0" xlinkHref="#m7e6aa7eb8b" y="394.92" />
      </g>
    </g>
  )
}

export default EFIND
