import DatePicker from './components/DatePicker'
import "./index.css"
// import Navbar from "./components/Navbar"
import OutputHarga from './components/OutputHarga'

function App() {
  return (
    <div>
      {/* <Navbar/> */}
       <h1 className="text-3xl font-bold underline text-gold">Hello world!</h1>
       <DatePicker></DatePicker>
       <OutputHarga></OutputHarga>

    </div>
  );
}

export default App;
