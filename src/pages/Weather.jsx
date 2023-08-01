import { useState, useEffect } from "react";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherHourly from "../components/WeatherHourly";
import WeatherDaily from "../components/WeatherDaily";
import MapComponent from "../components/MapComponent";

export default function PageWeather() {
    const [data, setData] = useState({
        position: { lat: 37.95, lng: -121.3 },
        locationSelected: false,
    });

    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${data.position.lat}&longitude=${data.position.lng}&hourly=temperature_2m,precipitation_probability,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FLos_Angeles`;

    const [weather, setWeather] = useState(false);
    useEffect(
        function () {
            if (data.locationSelected === true) return;
            fetch(API_URL)
                .then((res) => res.json())
                .then(setWeather)
                .catch(console.error);
        },
        [API_URL, data]
    );
    return (
        <div className="weather-container">
            <WeatherCurrent weather={weather} data={data} setData={setData} />
            <MapComponent data={data} setData={setData} />
            <WeatherHourly weather={weather} data={data} />
            <WeatherDaily weather={weather} data={data} />
        </div>
    );
}
