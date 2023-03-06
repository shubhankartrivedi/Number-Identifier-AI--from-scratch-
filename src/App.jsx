import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState()
  const arr = new Array(10).fill(0)

  const [active,setActive] = useState([])

  function handleClick(e, value, index) {
   
    setActive([...active,{x:value,y:index}])
  }

  function checkActive(x,y){
    let activeArr = active.filter((item)=>{
      return item.x === x && item.y === y
    })
    if(activeArr.length > 0){
      return true
    }else{
      return false
    }
  }


  useEffect(() => {
    if(active.length<1){
      setCount()
    }
  }, [active])


  useEffect(() => {
    if(active.length>0){
      let x = active[0].x;
      let y = active[0].y;

      active.forEach((item,i)=>{
        if(item.x != x){

          if(item.x == active[active.length - 1].x){
            setCount("1")
          }
          if(item.x != active[i-1].x){
          setCount("Not 1")
          }
        }
        if(item.x == x){
        if(active.length != i+1){
          if(active[i+1].y - item.y > 1){
            setCount("Not 1")
          }
          if(active[i+1].y - item.y <= 1){
            setCount("1")
          }
            
        }
        
        }
      })


    }
  }, [active])

  return (
    <div className="App">
      <div className='w-full'>
        <div className='flex justify-around bg-gray-500 p-10'>
          <div className="">

            {
              

              arr.map((item, index) => {
                return (
                  <div className="flex justify-center flex-row">

                    <button onClick={(e)=>handleClick(e,0,index)} className={`p-5 border-black ${checkActive(0,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,1,index)} className={`p-5 border-black ${checkActive(1,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,2,index)} className={`p-5 border-black ${checkActive(2,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,3,index)} className={`p-5 border-black ${checkActive(3,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,4,index)} className={`p-5 border-black ${checkActive(4,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,5,index)} className={`p-5 border-black ${checkActive(5,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,6,index)} className={`p-5 border-black ${checkActive(6,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,7,index)} className={`p-5 border-black ${checkActive(7,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,8,index)} className={`p-5 border-black ${checkActive(8,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                    <button onClick={(e)=>handleClick(e,9,index)} className={`p-5 border-black ${checkActive(9,index)? "bg-black":"bg-white"} rounded-none`}>

                    </button>
                  </div>
                )
              })

            }


          </div>

          <div className="flex items-center">
            <div className='px-5 py-1 ml-10 text-3xl text-black bg-white/50'>
            <h3>{count}</h3>
            <button onClick={()=>setActive([])} className="bg-black text-white p-1 mt-5 text-xl">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
