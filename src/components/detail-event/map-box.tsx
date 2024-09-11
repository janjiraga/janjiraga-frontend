import { useEffect, useState } from "react";
import { Map, Marker } from "react-map-gl";
import { Venue } from "@/types";
import "mapbox-gl/dist/mapbox-gl.css";

type MapBoxParams = {
  venue: Venue;
};

export const MapBox = ({ venue }: MapBoxParams) => {
  const mapBoxToken = import.meta.env.VITE_APP_MAPBOX_TOKEN;
  const [viewState, setViewState] = useState({
    longitude: venue?.longitude,
    latitude: venue?.latitude,
    zoom: venue?.zoomLevel,
  });

  useEffect(() => {
    if (venue) {
      setViewState({
        longitude: venue?.longitude,
        latitude: venue?.latitude,
        zoom: venue?.zoomLevel,
      });
    }
  }, [venue]);

  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      style={{ width: "100%", height: "500px" }}
      mapboxAccessToken={mapBoxToken}
      initialViewState={viewState}
      onMove={(event) => setViewState(event.viewState)}
    >
      <Marker
        longitude={venue?.longitude}
        latitude={venue?.latitude}
        color="red"
      />
    </Map>
  );
};
