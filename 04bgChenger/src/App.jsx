 import { useState } from "react"
import "./App.css"

function App() {
  const [color, setcolor] = useState("olive")

  return (
   <div className="w-full h-screen  "
      style={{backgroundColor: color}} >


       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrapjustify-center gap-3 shadow-lg bg-white"> 
          <button onClick={() => setcolor("olive")} className="px-3 py-2 bg-olive-200 rounded">Olive</button>
          <button onClick={() => setcolor("blue")} className="px-3 py-2 bg-blue-200 rounded">Blue</button>
          <button onClick={() => setcolor("green")} className="px-3 py-2 bg-green-200 rounded">Green</button>
        </div>
        </div>   

      </div>
  )
}

export default App
