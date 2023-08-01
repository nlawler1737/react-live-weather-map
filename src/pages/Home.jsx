import WeatherPinpointLogo from "../components/WeatherPinpointLogo";

export default function PageHome() {
    return (
        <>
            <div className="home-container">
                <WeatherPinpointLogo className="lightning home--icon" />
                <div className="home--desc">
                    An Interactive Map To View Live Weather Around The World
                </div>
                <a href="/weather">
                    <button className="home--button">Open Weather Map</button>
                </a>
            </div>
        </>
    );
}
