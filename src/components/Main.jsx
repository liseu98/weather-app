import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
    return (
            <div class="h-screen w-screen">
                <video className="object-cover h-screen w-screen" src={videoBg} autoPlay loop muted />
                <div className="absolute top-0 w-screen h-screen flex items-center justify-center text-white">
                    <div className="flex flex-col mx-10 justify-center content-center p-5 rounded-xl border-2 bg-opacity-60 bg-gray-500">
                        <input placeholder="Introduce la ciudad" className="w-60 p-2 m-2 text-center mx-auto text-black rounded-xl"></input>
                        <button type="button" class="text-white w-20 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Buscar</button>
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="text-center m-2">
                                <label className="border-b-2">Ciudad</label>
                                <p>Buenos Aires</p>
                            </div>
                            <div className="text-center m-2">
                                <label className="border-b-2">Temperatura</label>
                                <p>24 grados</p>
                            </div>
                            <div className="text-center m-2">
                                <label className="border-b-2">Sensacion termica</label>
                                <p>Termica de 22</p>
                            </div>
                            <div className="text-center m-2">
                                <label className="border-b-2">Clima</label>
                                <p>Nublado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main