import DatePicker from './components/DatePicker'
import LoadingBar from './components/LoadingBar'
import Navbar from "./components/Navbar"
import OutputHarga from './components/OutputHarga'
import JualBeli from './components/RadioButton'
import OutputHarga from './components/OutputHarga'
import Navbar from "./components/Navbar"
import "./index.css"

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <DatePicker></DatePicker>
        <OutputHarga></OutputHarga>
        <JualBeli/>
        <LoadingBar/>
      </div>
    </>
  );
}

export default App;
