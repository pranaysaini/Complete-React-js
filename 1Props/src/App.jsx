import { useState } from 'react'
import './App.css'
import UserCard from './Components/UserCard'
import Card from './Components/card'

function App() {
  const [name, setName] = useState('')

  return (
    <>
        
        <div className=' min-h-screen w-full bg-slate-400 flex flex-col justify-center items-center gap-y-10'>
          <div className=' flex gap-x-5'>
            <UserCard name="Maharana Pratap" image="src/assets/Maharana_Pratap.webp" 
                      desc="lore mdfkdmv kokfvmdofv  deviojd dmf voidjv dof bvjd pfbkeo v vd vodkvod fvkdvo okif podvk pok asd"/>
            
            <UserCard name="Prithvi Raj" image="src/assets/PrithviRaj.jpeg" 
                      desc="lore mdfkdmv kokfvmdofv  deviojd dmf voidjv dof bvjd pfbkeo v vd vodkvod fvkdvo okif podvk pok asd"/>
            
            <UserCard name="Shivaji" image="src/assets/shivaji.jpeg" 
                      desc="lore mdfkdmv kokfvmdofv  deviojd dmf voidjv dof bvjd pfbkeo v vd vodkvod fvkdvo okif podvk pok asd"/>
            
          </div>

            <div>
              <Card title = "Card 1" name={name} setName={setName} />
              <Card title = "Card 2" name={name} setName={setName} />
 
            </div>
        </div>

    </>
  )
}

export default App
