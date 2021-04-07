import React from 'react'
import EETTFED from './Sectors/EETTFED'
import EETTE from './Sectors/EETTE'
import EETTW from './Sectors/EETTW'
import EFINA from './Sectors/EFINA'
import EFINB from './Sectors/EFINB'
import EFINC from './Sectors/EFINC'
import EFIND from './Sectors/EFIND'
import EFINE from './Sectors/EFINE'
import EFINF from './Sectors/EFINF'
import EFING from './Sectors/EFING'
import EFINH from './Sectors/EFINH'
import EFINJ from './Sectors/EFINJ'
import EFINK from './Sectors/EFINK'
import EFINL from './Sectors/EFINL'
import EFINM from './Sectors/EFINM'
import EFINN from './Sectors/EFINN'
import EFINV from './Sectors/EFINV'

const MapConfs = ({ colors }) => {
  const secColorsEE = colors[0]
  const secColorsEF = colors[1]

  return (
    <svg height="394.92pt" version="1.1" viewBox="0 0 201.742929 394.92" width="201.742929pt" style={{strokeLinecap:'butt', strokeLinejoin:'round'}}>
      <g id="figure_1">
        <g id="patch_1">
          <path d="M 0 394.92 
          L 201.742929 394.92 
          L 201.742929 0 
          L 0 0 
          z
          " style={{fill:'none'}}/>
        </g>
        <g id="axes_1">
        <g id="patch_2">
          <path d="M 194.542929 7.2 
          L 194.542929 387.72 
          L 7.2 387.72 
          L 7.2 7.2 
          L 194.542929 7.2 
          " style={{fill:'none'}} />
          </g>
          {/* Here are the sector polygons */}
          <EETTE color={secColorsEE.eette}/>
          <EETTW color={secColorsEE.eettw}/>
          <EETTFED color={secColorsEE.eettfed}/>
          <EFINA color={secColorsEF.efina}/>
          <EFINB color={secColorsEF.efinb}/>
          <EFINC color={secColorsEF.efinc}/>
          <EFIND color={secColorsEF.efind}/>
          <EFINE color={secColorsEF.efine}/>
          <EFINF color={secColorsEF.efinf}/>
          <EFING color={secColorsEF.efing}/>
          <EFINH color={secColorsEF.efinh}/>
          <EFINJ color={secColorsEF.efinj}/>
          <EFINK color={secColorsEF.efink}/>
          <EFINL color={secColorsEF.efinl}/>
          <EFINM color={secColorsEF.efinm}/>
          <EFINN color={secColorsEF.efinn}/>
          <EFINV color={secColorsEF.efinv}/>
        </g>
      </g>  
      <defs>
          <clipPath id="pc284ee2ed3">
              <path d="M 194.542929 7.2 
                L 194.542929 387.72 
                L 7.2 387.72 
                L 7.2 7.2 
                L 194.542929 7.2 
                " />
          </clipPath>
      </defs>
    </svg>
  )
}

export default MapConfs