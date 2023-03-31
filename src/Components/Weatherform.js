import React, {useState, useEffect} from 'react'
import axios from 'axios'
const TOKEN = require("../apiToken.js");

export default function Weatherform(props) {
     
    // useEffect( ()=>{
    //     const getCountry = async()=>{
    //         const resCountry = await fetch("")
    //     }
    //     getCountry();
    // },[]);

    // const handleOnChange = (event)=>{
    //     console.log("ChangeOccuring");
    //     setCity(event.target.value);
    // }

    const search = (event)=>{
        if(event.key === 'Enter'){
            axios.get(url).then((response)=>{
                setText(response.data);
                console.log(response.data);
            })
            setCity("");
        }
    }

    const getDayName =()=>{
        let now = new Date().toLocaleDateString('en-us', { weekday:"long"});
        return now;
    }

    const getTime=()=>{
        const current = new Date();
        const time = current.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          });
        console.log(time);
        return time;
    }
    

//-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|

    
    const [text, setText] = useState('0');
    const [city, setCity] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${TOKEN}`

//-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  return (
    <>
        <div className="hehe">
            <div className="container d-flex">

                {/* <div className="mb-3 px-4 py-3">
                    <label for="exampleDataList" className="form-label fs-1">{props.countryinput}
                    </label>
                    <input className="form-control w-75" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                    <datalist id="datalistOptions">
                    </datalist>
                </div>
                <div className="mb-3 px-4 py-3">
                    <label for="exampleDataList" className="form-label fs-1">{props.stateinput}
                    </label>
                    <input className="form-control w-75" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                    <datalist id="datalistOptions">
                    </datalist>
                </div> */}

                <div className="mb-3 px-4 py-3 position-absolute w-50 start-50 mt-5 translate-middle">

                    <input className="form-control " placeholder="Search City"
                    type="search"
                    value={city} 
                    onChange={event => setCity(event.target.value)} 
                    onKeyPress={search}/>

                </div>

                </div>


                <div className="result d-flex">

                    <div className="left position-absolute ms-4 mt-5 py-4">
                        <div className="temp mt-5 fs-1 py-1">{text.name}</div>
                        <div className="actual py-2">
                            {text.main ? <h1>{Math.floor(text.main.temp-273)} °C</h1> : null}
                        </div>
                        <div className="feels-like py-0 fs-3">
                            {text.main ? <p>Feels like {Math.round(text.main.feels_like-273)} °C</p> : null}
                        </div>
                    </div>

                    <div className="right position-absolute top-50 end-0 translate-middle-y me-4 mt-4 ">
                        <div className="day py-2 fs-2">
                            {getDayName()}, {getTime()}
                        </div>
                        <div className="description py-2 fs-4">
                            {text.weather ? <h1>{text.weather[0].main}</h1> : null}
                        </div>
                        <div className="visibility py-2 fs-4">
                            <p>{"Visibility : "+text.visibility}</p>
                        </div>
                    </div>

                    <div className="bottom position-absolute start-50 translate-middle-x mb-5  d-flex">
                        <div className="humidityclass d-flex flex-column px-5">
                            <div className="humidityval align-self-center fs-2">
                                {text.main ? <p>{text.main.humidity}%</p> : null}
                            </div>
                            <div className="humidity align-self-center fs-4">Humidity</div>
                        </div>
                        <div className="windclass d-flex flex-column px-5">
                            <div className="windval align-self-center fs-2">
                                {text.wind ? <p>{text.wind.speed}m/s</p> : null}
                            </div>
                            <div className="wind align-self-center fs-4">Wind</div>
                        </div>
                        <div className="cloudclass d-flex flex-column px-5">
                            <div className="cloudval align-self-center fs-2">
                                {text.clouds ? <p>{text.clouds.all}%</p> : null}
                            </div>
                            <div className="cloud align-self-center fs-4">Cloud</div>
                        </div>
                    </div>

                {/* <div className="bottom position-absolute bottom-0 start-50 translate-middle-x mb-5">
                    <div className="values d-flex">
                        <div className="humidityval px-5 mb-0 pb-0 fs-3">Humidity</div>
                        <div className="windspeedval px-5 fs-4">Wind</div>
                        <div className="cloudval px-5 fs-4">Cloud</div>
                    </div>
                    <div className="tags d-flex">
                        <div className="humidity px-5 mb-5 pb-4 fs-4">Humidity</div>
                        <div className="windspeed px-5 fs-4">Wind</div>
                        <div className="cloud px-5 fs-4">Cloud</div>
                    </div>
                </div> */}

                </div>
        </div>
    </>
  )
}
