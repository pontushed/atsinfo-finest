import React from 'react'
import styles from './styles'

const EFINL = ({ active, clickHandler }) => {

  return (
    <g className='sector' id="sec_efinl" onClick={() => clickHandler('efinl')}>
        <defs>
            <path d="M 101.073106 -100.801887 
            L 111.758263 -123.906009 
            L 115.927506 -134.590551 
            L 123.585881 -132.083981 
            L 126.95453 -130.972021 
            L 131.50346 -129.467944 
            L 141.243068 -126.555996 
            L 152.664216 -123.529944 
            L 151.035428 -121.336347 
            L 148.499677 -117.940661 
            L 144.007125 -112.421086 
            L 142.881583 -110.995226 
            L 138.701648 -105.711318 
            L 136.551679 -102.42265 
            L 130.486159 -90.918445 
            L 130.163955 -90.313939 
            L 129.889715 -89.912018 
            L 127.273455 -89.77126 
            L 114.157107 -89.034237 
            L 108.570096 -91.982509 
            L 104.095397 -98.615845 
            z
            " id="m4efbcc54e3" style={styles.lineStyle} />
        </defs>
        <g clipPath="url(#pc284ee2ed3)">
            <use style={styles.getFillStyle(active)}
                x="0" xlinkHref="#m4efbcc54e3" y="394.92" />
        </g>
    </g>
    )
}

export default EFINL
