import { useState } from "react"

const App = () => {
  const [userName, setUserName] = useState("")

  // function changeHandler(e) {
  //   console.log("change handler called")
  //   console.log("event: ", e.target.value)
  //   e.preventDefault()
  //   setUserName(e.target.value)
  // }

  function submitHandler(event) {
    event.preventDefault()
    setUserName("")

  }
  return (
    <div>
      <form action="" className="me-app">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)} />
        <button type="submit" onClick={(event) => submitHandler(event)}>Login</button>
      </form>
    </div>
  )
}

export default App
