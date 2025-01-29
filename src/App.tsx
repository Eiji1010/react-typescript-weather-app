import './App.css'

import {useState} from "react";
import Title from "./components/Title.tsx";
import Form from "./components/Form.tsx";
import Results from "./components/Results.tsx";

const App = () => {
    const [city, setCity] = useState<string>("");

    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=ab319111dfd84ad8aa9113640252601&q=London&aqi=no")
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <Title/>
            <Form setCity={setCity} getWeather={getWeather}/>
            <Results/>
        </div>
    )
}

export default App
