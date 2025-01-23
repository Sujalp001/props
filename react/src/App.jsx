import './App.css'
import { Userprofile } from './component/Userprofile'

function App() {
 
  const user={
    name:"Sujal",
    age:19,
    location:"Surat",
    bio:"A passionate developer with a love for coding!"
  }

  return (
    <>
      <div className="App">
      <h1>User Profile</h1>
      
      <Userprofile 
        name={user.name} 
        age={user.age} 
        location={user.location} 
        bio={user.bio} 
      />
      </div>
    </>
  )
}

export default App
