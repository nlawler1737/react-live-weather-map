import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Tooltip,
} from "react-leaflet";
import PropTypes from "prop-types";
const MapComponent = ({ data, setData }) => {
    function LocationMarker() {
        const map = useMapEvents({
            click(e) {
                const zoom = map.getZoom();
                map.flyTo(e.latlng, zoom);
                setData((a) => ({
                    ...a,
                    locationSelected: true,
                    position: e.latlng,
                }));
            },
        });

        return data === null ? null : (
            <Marker position={data.position}>
                <Tooltip permanent>
                    Lat: {data.position.lat.toFixed(3)}, Lon:{" "}
                    {data.position.lng.toFixed(3)}
                </Tooltip>
            </Marker>
        );
    }

    return (
        <MapContainer center={data.position} zoom={8} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default MapComponent;

MapComponent.propTypes = {
    data: PropTypes.object,
    setData: PropTypes.func,
};
