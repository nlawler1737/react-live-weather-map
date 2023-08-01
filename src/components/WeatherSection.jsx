import PropTypes from "prop-types";
import "./WeatherSection.css";
import { weatherCodeToIcon } from "../assets/helpers";

export default function WeatherSection({
    time,
    precipitation_probability = [null],
    temperature_2m_min,
    temperature_2m_max,
    weathercode,
    winddirection_10m,
    windspeed_10m,
    temperature_2m = [null],
    precipitation_probability_max = [null],
}) {
    const rainPercent =
        precipitation_probability[0] === null
            ? precipitation_probability_max
            : precipitation_probability;
    console.log(rainPercent);
    return (
        <div className="weather-section">
            <div className="weather-time">{time[0]}</div>
            <i
                className={`bi bi-${weatherCodeToIcon(
                    weathercode[0]
                )} weather-code`}
            ></i>
            {(temperature_2m[0] || temperature_2m_max) && (
                <div className="weather-high">
                    <div>
                        {temperature_2m[0] || temperature_2m_max[0]}
                        {
                            <small>
                                {temperature_2m[1] || temperature_2m_max[1]}
                            </small>
                        }
                    </div>
                </div>
            )}
            {temperature_2m_min && (
                <div className="weather-low">
                    {temperature_2m_min[0]}
                    <small>{temperature_2m_min[1]}</small>
                </div>
            )}
            {windspeed_10m && winddirection_10m && (
                <div className="weather-wind">
                    <i className="bi bi-wind wind-icon"></i>
                    <div className="weather-wind-speed">
                        {windspeed_10m[0]}
                        <small>{windspeed_10m[1]}</small>
                    </div>
                    <div className="weather-wind-direction">
                        {winddirection_10m[0]}
                    </div>
                </div>
            )}
            <div className="weather-rain">
                <i className="bi bi-cloud-rain-fill rain-icon"></i>
                <div className="weather-percentage">{rainPercent}</div>
            </div>
        </div>
    );
}

WeatherSection.propTypes = {
    time: PropTypes.array,
    precipitation_probability: PropTypes.array,
    temperature_2m: PropTypes.array,
    temperature_2m_min: PropTypes.array,
    temperature_2m_max: PropTypes.array,
    weathercode: PropTypes.array,
    winddirection_10m: PropTypes.array,
    windspeed_10m: PropTypes.array,
    precipitation_probability_max: PropTypes.array,
};
