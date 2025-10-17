import React , {useState} from 'react'
import './App.css'

const App = () => {

  const [first, setFirst] = useState('')
  const [second, setsecond] = useState('')

  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()

    const copytask = [...task]

    copytask.push({first,second})
    settask(copytask)

    
  setFirst('')
  setsecond('')
  }


  const deletenote =(idx)=>{
    const copytask = [...task]

    copytask.splice(idx,1)

    settask(copytask)
  }
        

  return (
    <div className='h-screen lg:flex bg-black text-white'>
     
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start flex-col gap-4 p-10 '>
     <h1 className='text-4xl font-bold'>Add Note</h1>
        <div className='flex items-start w-1/2 gap-4 flex-col'>
          <input type="text" placeholder='Enter note heading' 
          className=' outline-none font-medium px-5 w-full py-2 rounded border-2'
          value={first}
          onChange={(e) =>{
            setFirst(e.target.value)
           }}
          />

          <textarea type='text' placeholder='Enter Notes' className='px-5 w-full font-medium pyy-2  border-2 outline-none rounded h-32 ' 
          value={second}
          onChange={(e) =>{
            setsecond(e.target.value)
          }}/>

          <button className='bg-white active:scale-50 w-full outline-none font-medium text-black px-5 py-2 rounded'>Add Note</button>
        </div>
      </form>

      <div className='lg:w-1/2 lg:border-l-4 p-10'>
        <h1 className='text-xl font-bold'>Recent Note</h1>
        <div className='flex flex-wrap items-start justify-start gap-5  h-[90%] overflow-auto mt-5'>
       

          {task.map(function(elem,idx){
            return <div key={idx} className='h-52 w-40 rounded-2xl flex flex-col justify-between text-black p-4 bg-white'>
              <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.first}</h3>
               <p className='mt-2 leading-tight font-medium text-gray500 p-2 '>{elem.second}</p>
               </div>


            <button onClick={() => {
              deletenote(idx)
            }} className='w-full cursor-pointer active:scale-95  bg-red-600 text-white  px-4 py-1 text-xs rounded font-bold'>Delete</button>
               </div>

          })}
 
        </div>
      </div>
    </div>
  )
}

export default App