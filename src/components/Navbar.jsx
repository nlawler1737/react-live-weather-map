import WeatherPinpointLogo from "./WeatherPinpointLogo";
import "./Navbar.css";
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="logo">
                    <WeatherPinpointLogo className="logo-img" />
                    WeatherPinpoint
                </a>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/weather" className="nav-link">
                        Weather Map
                    </a>
                </li>
                <li>
                    <a href="/about" className="nav-link">
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
}
