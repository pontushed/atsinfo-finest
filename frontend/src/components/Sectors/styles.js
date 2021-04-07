const lineStyle = {
  stroke: '#000000',
  strokeOpacity: '0.5',
  strokeWidth: '0.5',
}

const getFillStyle = (isActive) => {
  return {
    fill: isActive ? '#3298dc' : '#cccccc',
    stroke: '#000000',
    strokeOpacity: '0.5',
    strokeWidth: '0.5',
    //filter: 'drop-shadow(2px 2px 2px #999)'
  }
}

export default { lineStyle, getFillStyle }