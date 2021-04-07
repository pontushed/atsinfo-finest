import React from 'react'
import styles from './styles'

const EFINV = ({ active, clickHandler }) => {

  return (
    <g className='sector' id="sec_efinv" onClick={() => clickHandler('efinv')}>
        <defs>
            <path d="M 45.396461 -186.620801 
            L 46.70317 -188.969747 
            L 46.75313 -189.052282 
            L 47.098537 -189.67105 
            L 47.773989 -190.8927 
            L 48.352236 -191.950019 
            L 48.614926 -192.38 
            L 49.467761 -193.901758 
            L 50.145546 -195.118517 
            L 50.519229 -195.781137 
            L 51.005008 -196.651218 
            L 52.553097 -199.389212 
            L 56.545779 -206.480756 
            L 57.978768 -209.019213 
            L 58.371357 -209.713021 
            L 59.127794 -211.043132 
            L 59.415934 -211.562008 
            L 60.65265 -213.558052 
            L 64.939626 -210.171569 
            L 73.330269 -203.674555 
            L 93.553847 -189.551934 
            L 109.961281 -201.970242 
            L 124.927995 -212.512351 
            L 141.081326 -226.352445 
            L 144.998302 -229.673361 
            L 145.231512 -225.997266 
            L 151.817001 -219.640661 
            L 158.553666 -206.380073 
            L 153.810719 -191.026366 
            L 153.159395 -191.670052 
            L 148.48216 -190.590381 
            L 142.142105 -187.447216 
            L 141.833335 -187.140189 
            L 133.403637 -178.806021 
            L 131.036176 -176.453928 
            L 129.947237 -178.554117 
            L 127.206178 -178.751484 
            L 124.327144 -178.953101 
            L 123.153684 -179.039 
            L 120.348867 -177.601714 
            L 118.862995 -176.835114 
            L 117.606036 -174.785894 
            L 115.902156 -172.015508 
            L 116.625513 -169.361435 
            L 116.31301 -169.446678 
            L 109.544553 -171.373395 
            L 103.118339 -155.646251 
            L 98.46316 -159.655291 
            L 91.981745 -159.08776 
            L 87.508172 -156.356488 
            L 83.638054 -152.208729 
            L 74.870746 -159.574717 
            L 59.608756 -172.656493 
            L 58.56725 -173.575126 
            L 55.805295 -176.009005 
            L 54.803111 -176.891746 
            L 45.156627 -186.200782 
            z
            " id="m1dff82ca09" style={styles.lineStyle} />
        </defs>
        <g clipPath="url(#pc284ee2ed3)">
            <use style={styles.getFillStyle(active)}
                x="0" xlinkHref="#m1dff82ca09" y="394.92" />
        </g>
    </g>
    )
}

export default EFINV
