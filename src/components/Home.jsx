import { useState } from "react";
import Boton from "./Boton";

function Home() {

    const [res, setRes] = useState("")

    const buttons = ["C", "D", "/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "-", ".", "0", "="];

    const findval = () => {
        let result = Function("return "+res)()
        setRes(result.toString())
    }

    const handler = (arg) => {

        if(res === "Infinity"){
            setRes("");
            return;
        }

        if(arg == "C") setRes("");
        else if(arg == "=") findval();
        else if(arg == "D"){
            let n = res.length
            if(n>0) setRes(res.slice(0,n-1))
        }
        else setRes(res.concat(arg))
    }

  return (
    <>
        <div className="bg-white rounded-xl shadow-lg w-100 md:w-[34%] md:mx-auto my-10 mx-5 p-5">
            <h3 className="text-center mb-5 text-2xl font-black text-cyan-700">Calculadora <span className="text-cyan-500">Soynico.click</span></h3>
            <div className="w-100 h-auto">
                <div className="w-100 p-4 h-24 rounded-xl bg-slate-100 shadow-xl flex justify-end">
                    <div className="text-3xl font-semibold text-cyan-800 my-auto">{res}</div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center pt-5 gap-2">
                {buttons.map((boton, index) => (<Boton handler={handler} value={boton} key={index} />) )}
            </div>
            <p className="text-center mt-5 text-cyan-500 font-semibold">@Soynico.click</p>
        </div> 
    </>
  )
}

export default Home