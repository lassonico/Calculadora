
function Boton({value, handler}) {
  return (
    <div className={`cursor-pointer p-5 w-[23%] rounded-xl text-center font-bold text-cyan-800 shadow-lg select-none text-xl bg-slate-200 hover:bg-slate-300 ${value == "D" ? 'text-red-500' : ''} ${value == "C" || value == "=" ? 'text-orange-500 w-[47%]' : '' }`} onClick={() => handler(value)}>{value}</div>
  )
}

export default Boton