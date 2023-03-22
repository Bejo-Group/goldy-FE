import DatePicker from './components/DatePicker'
import OutputHarga from './components/OutputHarga'
import Navbar from "./components/Navbar"
import "./index.css"

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <h1 className="text-3xl font-bold underline text-gold">Hello world!</h1>
        <DatePicker></DatePicker>
        <OutputHarga></OutputHarga>
      </div>
    </>
  );
}

export default App;
