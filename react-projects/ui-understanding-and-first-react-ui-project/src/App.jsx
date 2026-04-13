import Section1 from "./components/Section1/Section1";
import { userData } from './components/users';



function App() {
  return (
    <>
      <Section1 users={userData} />
    </>
  );
}

export default App;
