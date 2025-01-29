import './App.css'

import {useState} from "react";
import Title from "./components/Title.tsx";
import Form from "./components/Form.tsx";
import Results from "./components/Results.tsx";
import Loading from "./components/Loading.tsx";
import * as React from "react";

type ResultsState = {
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
}

const App = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultsState>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: "",
    });

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=ab319111dfd84ad8aa9113640252601&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon,
                })
                setLoading(false);
                setCity("");
            })
            .catch(() => alert("エラーが発生しました。"))
    }

    return (
        <div className={"wrapper"}>
            <div className={"container"}>
                <Title/>
                <Form setCity={setCity} getWeather={getWeather} city={city}/>
                <Results results={results}/>
            </div>
        </div>
    )
}

export default App