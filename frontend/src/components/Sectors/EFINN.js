import React from 'react'
import styles from './styles'

const EFINN = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efinn" onClick={() => clickHandler('efinn')}>
        <defs>
            <path d="M 103.118339 -155.646251 
            L 109.544553 -171.373395 
            L 116.31301 -169.446678 
            L 116.625513 -169.361435 
            L 115.902156 -172.015508 
            L 117.606036 -174.785894 
            L 118.862995 -176.835114 
            L 120.348867 -177.601714 
            L 123.153684 -179.039 
            L 124.327144 -178.953101 
            L 127.206178 -178.751484 
            L 129.947237 -178.554117 
            L 131.036176 -176.453928 
            L 133.403637 -178.806021 
            L 141.833335 -187.140189 
            L 142.142105 -187.447216 
            L 148.48216 -190.590381 
            L 153.159395 -191.670052 
            L 153.810719 -191.026366 
            L 170.481833 -178.227369 
            L 171.984967 -175.60865 
            L 175.577193 -171.695003 
            L 176.407848 -170.318122 
            L 172.271323 -154.324607 
            L 162.622663 -138.622931 
            L 160.314324 -134.912607 
            L 158.685878 -132.47325 
            L 155.12574 -127.17603 
            L 152.664216 -123.529944 
            L 141.243068 -126.555996 
            L 131.50346 -129.467944 
            L 126.95453 -130.972021 
            L 123.585881 -132.083981 
            L 115.927506 -134.590551 
            L 111.873146 -140.316136 
            L 111.766371 -141.562016 
            L 111.14707 -148.709117 
            L 107.565946 -151.80951 
            L 105.344355 -153.725471 
            z
            " id="m223315e2b0" style={styles.lineStyle} />
        </defs>
        <g clipPath="url(#pc284ee2ed3)">
            <use style={styles.getFillStyle(color)}
                x="0" xlinkHref="#m223315e2b0" y="394.92" />
        </g>
    </g>
    )
}

export default EFINN