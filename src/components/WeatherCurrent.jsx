import { degreesToDirection, weatherCodeToIcon } from "../assets/helpers";
import PropTypes from "prop-types";
import "./WeatherCurrent.css";
export default function WeatherCurrent({ weather, data, setData }) {
    if (!weather) return <div className="widget weather-current"></div>;
    const current = weather.current_weather;
    const date = new Date();
    const currentHour = date.getHours();

    return (
        <div className="widget weather-current">
            <div className="weather-current--left">
                <div
                    className={
                        data.locationSelected
                            ? "weather-current--location clickable"
                            : "weather-current--location"
                    }
                    onClick={function () {
                        setData((prev) => ({
                            ...prev,
                            locationSelected: false,
                        }));
                    }}
                >
                    {data.locationSelected
                        ? "Click To Update"
                        : `${data.position.lat.toFixed(
                              3
                          )}, ${data.position.lng.toFixed(3)}`}
                </div>
                <div className="weather-current--conditions">
                    <i
                        className={`weather-current--code bi bi-${weatherCodeToIcon(
                            current.weathercode
                        )}`}
                    ></i>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            height: "100%",
                        }}
                    >
                        <div className="weather-current--chars">
                            <div>H</div>
                            <div>L</div>
                        </div>
                        <div className="weather-current--high-low">
                            <div>{weather.daily.temperature_2m_max[0]}°</div>
                            <div>{weather.daily.temperature_2m_min[0]}°</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-current--right">
                <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                    <div className="weather-current--rain">
                        <i className="bi-cloud-rain-fill"></i>
                        <div className="weather-current--rain-percentage">
                            {
                                weather.hourly.precipitation_probability[
                                    currentHour
                                ]
                            }
                            %
                        </div>
                    </div>
                    <div className="weather-current--wind">
                        <i className="bi-wind"></i>
                        <div>
                            <div className="weather-current--wind-speed">
                                {weather.hourly.windspeed_10m[currentHour]}%
                            </div>
                            <div className="weather-current--wind-direction">
                                {degreesToDirection(
                                    weather.hourly.winddirection_10m[
                                        currentHour
                                    ]
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weather-current--temp">
                    {current.temperature}°
                </div>
            </div>
        </div>
    );
}

WeatherCurrent.propTypes = {
    weather: PropTypes.object,
    data: PropTypes.object,
    setData: PropTypes.func,
};
