import type { NextPage } from 'next';
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const Map = () => {
    const mapContainer = useRef<any>(null);
    console.log(mapContainer)
    const map = useRef<mapboxgl.Map | any>(null);
    // @ts-ignore
    useEffect(() => {

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? 'pk.eyJ1IjoibWFsYXlha3ZsIiwiYSI6ImNsY3Jxb3FhdzBiY3Qzd3BjMDRzYjVvZmEifQ.asLancy_a5ZTUNZHVRCSaA';
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [15.4542, 18.7322], // center map on Chad
            zoom: 1.8
        });
        map.current.on('load', () => {
            console.log('loading map', map);

            // geojson.features.forEach((marker) => {
            //     // create a DOM element for the marker
            //     const markerIcon = document.createElement('div');
            //     markerIcon.className = 'location-marker';
            //     markerIcon.style.backgroundImage = 'url(/location-marker.png)';
            //     markerIcon.style.width = marker.properties.iconSize[0] + 'px';
            //     markerIcon.style.height = marker.properties.iconSize[1] + 'px';
            //
            //     new mapboxgl.Marker(markerIcon)
            //         .setLngLat(marker.geometry.coordinates)
            //         .addTo(map.current);
            // });
        });

    })

    return (
        <main>
            <div className="map-container" ref={mapContainer} />
        </main>
    );
};
export default Map;