import './App.css';
import videoBg from './assets/videoBg.mp4'
import React, { useState } from 'react';
import axios from 'axios'


function App() {

const [data, setData] = useState({})
const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7526dd8d4a29effc243bc4246cd3b5cc&units=metric&lang=es`;

const searchLocation = () => {
    axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
    })
    setLocation('')
}


return (
    <div className="h-screen w-screen">
        <video className="object-cover h-screen w-screen" src={videoBg} autoPlay loop muted />
        <div className="absolute top-0 w-full h-screen flex items-center flex-col justify-center text-white">
                <div className="flex flex-row justify-center items-center">
                    <input value={location} onChange={event =>setLocation(event.target.value)}  placeholder="Introduce la ciudad" className="w-60 p-2 m-2 text-center mx-auto text-black rounded-xl"></input>
                    <button onClick={searchLocation} type="button" class="text-white w-20 h-10 mx-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Buscar</button>
                </div>
                <div className="flex flex-col justify-center content-center mt-2 mx-5 p-2 border-2 bg-opacity-60 bg-gray-500 rounded-xl">
                    <div className="text-center m-2">
                        <label className="border-b-2 text-4xl"></label>
                        <p className="mt-2 text-2xl">{data.name}</p>
                    </div>
                    <div className="text-center">
                        <label className="border-b-2 text-4xl"></label>
                        {data.main ? <p className="mt-2 text-2xl"> {data.main.temp} grados centigrados</p> : null}
                    </div>
                    <div className="text-center m-2">
                        <label className="border-b-2 text-4xl"></label>
                        {data.main ? <p className="mt-2 text-2xl"> {data.main.feels_like} grados de sensacion termica</p> : null}
                    </div>
                    <div className="text-center m-2">
                        <label className="border-b-2 text-4xl"></label>
                        {data.weather ? <p className="mt-2 text-2xl">{data.weather[0].description}</p> : null}
                    </div>
                </div>
            </div>
    </div>
)
}

export default App;
