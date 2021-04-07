import React, { useState } from 'react'
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

const Map = () => {
  const [eettfed, setEETTFED] = useState(true)
  const [eette, setEETTE] = useState(true)
  const [eettw, setEETTW] = useState(true)
  const [efina, setEFINA] = useState(true)
  const [efinb, setEFINB] = useState(true)
  const [efinc, setEFINC] = useState(true)
  const [efind, setEFIND] = useState(true)
  const [efine, setEFINE] = useState(true)
  const [efinf, setEFINF] = useState(true)
  const [efing, setEFING] = useState(true)
  const [efinh, setEFINH] = useState(true)
  const [efinj, setEFINJ] = useState(true)
  const [efink, setEFINK] = useState(true)
  const [efinl, setEFINL] = useState(true)
  const [efinm, setEFINM] = useState(true)
  const [efinn, setEFINN] = useState(true)
  const [efinv, setEFINV] = useState(true)

  const handleSectorClick = (sector) => {
    if (sector === 'eettfed') setEETTFED(!eettfed)
    if (sector === 'eette') setEETTE(!eette)
    if (sector === 'eettw') setEETTW(!eettw)
    if (sector === 'efina') setEFINA(!efina)
    if (sector === 'efinb') setEFINB(!efinb)
    if (sector === 'efinc') setEFINC(!efinc)
    if (sector === 'efind') setEFIND(!efind)
    if (sector === 'efine') setEFINE(!efine)
    if (sector === 'efinf') setEFINF(!efinf)
    if (sector === 'efing') setEFING(!efing)
    if (sector === 'efinh') setEFINH(!efinh)
    if (sector === 'efinj') setEFINJ(!efinj)
    if (sector === 'efink') setEFINK(!efink)
    if (sector === 'efinl') setEFINL(!efinl)
    if (sector === 'efinm') setEFINM(!efinm)
    if (sector === 'efinn') setEFINN(!efinn)
    if (sector === 'efinv') setEFINV(!efinv)
  }

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
          <EETTE active={eette} clickHandler={handleSectorClick}/>
          <EETTW active={eettw} clickHandler={handleSectorClick}/>
          <EETTFED active={eettfed} clickHandler={handleSectorClick}/>
          <EFINA active={efina} clickHandler={handleSectorClick}/>
          <EFINB active={efinb} clickHandler={handleSectorClick}/>
          <EFINC active={efinc} clickHandler={handleSectorClick}/>
          <EFIND active={efind} clickHandler={handleSectorClick}/>
          <EFINE active={efine} clickHandler={handleSectorClick}/>
          <EFINF active={efinf} clickHandler={handleSectorClick}/>
          <EFING active={efing} clickHandler={handleSectorClick}/>
          <EFINH active={efinh} clickHandler={handleSectorClick}/>
          <EFINJ active={efinj} clickHandler={handleSectorClick}/>
          <EFINK active={efink} clickHandler={handleSectorClick}/>
          <EFINL active={efinl} clickHandler={handleSectorClick}/>
          <EFINM active={efinm} clickHandler={handleSectorClick}/>
          <EFINN active={efinn} clickHandler={handleSectorClick}/>
          <EFINV active={efinv} clickHandler={handleSectorClick}/>
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

export default Map