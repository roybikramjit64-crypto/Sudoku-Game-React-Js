import './Cell.css'

function Cell({value, onChange, isFixed, isWrong, style}) {
  return (
    <input type="text" className={`cell ${isWrong ? 'wrong' : ''} ${isFixed ? 'fixed' : ''}`} value={value} onChange={onChange} readOnly={isFixed} style={style} maxLength="1" />
  )
}

export default Cell