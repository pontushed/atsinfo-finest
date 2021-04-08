const lineStyle = {
  stroke: '#000000',
  strokeOpacity: '0.5',
  strokeWidth: '0.5',
}

const getFillStyle = (colorNumber) => {
  let fillColors = ['#DA70D6','#eeac99','#e06377','#5b9aa0','#b8a9c9']
  return {
    fill: fillColors[colorNumber],
    stroke: '#000000',
    strokeOpacity: '0.5',
    strokeWidth: '0.5',
    //filter: 'drop-shadow(2px 2px 2px #999)'
  }
}

const getFillStyleEE = (colorNumber) => {
  let fillColors = ['#3298dc','#00d1b2','#ffe08a']
  return {
    fill: fillColors[colorNumber],
    stroke: '#000000',
    strokeOpacity: '0.5',
    strokeWidth: '0.5',
    //filter: 'drop-shadow(2px 2px 2px #999)'
  }
}

export default { lineStyle, getFillStyle, getFillStyleEE }