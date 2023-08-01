import WeatherSection from "./WeatherSection";
import { degreesToDirection } from "../assets/helpers";
import PropTypes from "prop-types";

export default function WeatherHourly({ weather }) {
    if (!weather) return <div className="widget weather-hourly"></div>;
    const hourlyKeys = Object.keys(weather.hourly);
    const hourlyMapped = [];
    for (let i = 0; i < weather.hourly.time.length; i++) {
        const obj = {};
        for (let key of hourlyKeys) {
            let value = weather.hourly[key][i];
            if (key == "time")
                value = new Date(value * 1000)
                    .toLocaleTimeString()
                    .replace(/(\d+):\d+:\d+ (\w+)/, "$1 $2");
            if (key === "winddirection_10m") value = degreesToDirection(value);
            const unit = weather.hourly_units[key];
            obj[key] = [value, unit];
        }
        hourlyMapped.push(obj);
    }
    const currentTimeIndex = new Date().getHours();

    return (
        <div className="widget weather-hourly">
            <div className="widget-title">Hourly</div>
            <div className="sections">
                {hourlyMapped
                    .slice(currentTimeIndex, currentTimeIndex + 7)
                    .map((a, b) => (
                        <WeatherSection key={b} {...a} />
                    ))}
            </div>
        </div>
    );
}

WeatherHourly.propTypes = {
    weather: PropTypes.object,
};
