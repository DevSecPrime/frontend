
const App = () => {
  function submitHandler(event) {
    event.preventDefault()
    console.log("event: ", event)

  }
  return (
    <div>
      <form action="" className="me-app">
        <input type="text" placeholder="Username" />
        <button type="submit" onClick={(event) => submitHandler(event)}>Login</button>
      </form>
    </div>
  )
}

export default App
