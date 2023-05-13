
function Boton({value, handler}) {
  return (
    <div className={`cursor-pointer p-5 w-[23%] ${value == "D" ? 'bg-red-500 text-white hover:bg-red-600' : ''} ${value == "C" || value == "=" ? 'bg-orange-400 w-[47%] text-white hover:bg-orange-500' : '' }  rounded-xl text-center font-bold text-cyan-800 shadow-lg select-none text-xl bg-slate-200 hover:bg-slate-300`} onClick={() => handler(value)}>
        {value}
    </div>
  )
}

export default Boton