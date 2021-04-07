import React from 'react'
import styles from './styles'

const EFINB = ({ color, clickHandler }) => {

  return (
    <g className='sector' id="sec_efinb" onClick={() => clickHandler('efinb')}>
        <defs>
            <path d="M 77.033252 -78.445219 
            L 76.600873 -75.922835 
            L 76.477007 -75.183319 
            L 77.561672 -72.679443 
            L 78.495249 -70.528724 
            L 78.499239 -70.528853 
            L 79.069059 -69.20495 
            L 77.437446 -68.433785 
            L 76.929815 -68.196817 
            L 76.547968 -68.019175 
            L 67.193525 -63.60663 
            L 65.73157 -62.895002 
            L 64.720113 -62.415498 
            L 64.105082 -62.118588 
            L 63.966126 -62.052618 
            L 63.211589 -61.698049 
            L 62.210342 -61.220927 
            L 61.351601 -60.810312 
            L 53.191659 -56.908944 
            L 52.635591 -56.642278 
            L 49.84807 -55.297012 
            L 47.087021 -53.974107 
            L 36.117512 -48.666748 
            L 35.368914 -49.491053 
            L 34.891904 -50.017372 
            L 33.471216 -51.58202 
            L 33.326103 -51.739433 
            L 33.116575 -51.967659 
            L 32.915144 -52.188089 
            L 32.363651 -52.802308 
            z
            " id="me87634d879" style={styles.lineStyle} />
        </defs>
        <g clipPath="url(#pc284ee2ed3)">
            <use style={styles.getFillStyle(color)}
                x="0" xlinkHref="#me87634d879" y="394.92" />
        </g>
    </g>
    )
}

export default EFINB
