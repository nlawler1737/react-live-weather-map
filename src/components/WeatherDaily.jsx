import WeatherSection from "./WeatherSection";
import PropTypes from "prop-types"

export default function WeatherDaily({ weather }) {
    if (!weather) return <div className="widget weather-daily"></div>

    const dailyKeys = Object.keys(weather.daily)
    const dailyMapped = []
    for (let i = 0; i < weather.daily.time.length; i++) {
        const obj = {}
        for (let key of dailyKeys) {
            let value = weather.daily[key][i]
            if (key === "time") value = new Date(value*1000).toDateString().replace(/(\w+) \w+ (\d+).*/,"$1 $2")
            const unit = weather.daily_units[key]
            obj[key] = [value, unit]
        }
        dailyMapped.push(obj)
    }

    return (
        <div className="widget weather-daily">
            <div className="widget-title">Daily</div>
            <div className="sections">

            {dailyMapped.map((a,b)=><WeatherSection key={b} {...a}/>)}
            </div>
        </div>
    );
}

WeatherDaily.propTypes = {
    weather: PropTypes.object
}