import './App.css';
import Navbar from './Components/navbar/Navbar';
import Weatherform from './Components/weatherform/Weatherform'
function App() {
  return (
    <>
      <Navbar  brandSrc="https://cdn-icons-png.flaticon.com/512/1555/1555512.png" brandName="WeatherNow" searchBox = "Enter State"/>

      <Weatherform countryinput="Choose Country" stateinput="Choose State" cityinput="Choose City"  weatheroutput="Results for x,y" city="Delhi"/>


    </>
  );
}

export default App;
