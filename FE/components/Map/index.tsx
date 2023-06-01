import React, { useRef, useEffect } from 'react';
import mapboxgl from "mapbox-gl";

const Map = () => {
    const mapContainer = useRef<any>(null);
    // console.log(mapContainer)
    // const map = useRef<mapboxgl.Map | any>(null);

    // @ts-ignore
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFsYXlha3ZsIiwiYSI6ImNsY3Jxb3FhdzBiY3Qzd3BjMDRzYjVvZmEifQ.asLancy_a5ZTUNZHVRCSaA';
        //
        console.log(mapContainer)
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/satellite-v9',
            projection: {
                name: 'equalEarth'
            }, // Display the map as a globe, since satellite-v9 defaults to Mercator
            zoom: 1.5,
            center: [-90, 40]
        });
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });

        // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? 'pk.eyJ1IjoibWFsYXlha3ZsIiwiYSI6ImNsY3Jxb3FhdzBiY3Qzd3BjMDRzYjVvZmEifQ.asLancy_a5ZTUNZHVRCSaA';
        // map.current = new mapboxgl.Map({
        //     container: mapContainer.current,
        //     style: 'mapbox://styles/mapbox/light-v10',
        //     center: [15.4542, 18.7322], // center map on Chad
        //     zoom: 1.8
        // });
        // map = new mapboxgl.Map({
        //     container: "map-container",
        //     style: 'mapbox://styles/mapbox/satellite-v9',
        //     projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
        //     zoom: 1.5,
        //     center: [-90, 40]
        // });
        const secondsPerRevolution = 120;
// Above zoom level 5, do not rotate.
        const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
        const slowSpinZoom = 3;

        let userInteracting = false;
        let spinEnabled = true;

        function spinGlobe() {
            const zoom = map.getZoom();
            if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
                let distancePerSecond = 360 / secondsPerRevolution;
                if (zoom > slowSpinZoom) {
// Slow spinning at higher zooms
                    const zoomDif =
                        (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                    distancePerSecond *= zoomDif;
                }
                const center = map.getCenter();
                center.lng -= distancePerSecond;
// Smoothly animate the map over one second.
// When this animation is complete, it calls a 'moveend' event.
                map.easeTo({ center, duration: 1000, easing: (n) => n });
            }
        }

        // Pause spinning on interaction
        map.on('mousedown', () => {
            userInteracting = true;
        });

// Restart spinning the globe when interaction is complete
        map.on('mouseup', () => {
            userInteracting = false;
            spinGlobe();
        });

// These events account for cases where the mouse has moved
// off the map, so 'mouseup' will not be fired.
        map.on('dragend', () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on('pitchend', () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on('rotateend', () => {
            userInteracting = false;
            spinGlobe();
        });

// When animation is complete, start spinning if there is no ongoing interaction
        map.on('moveend', () => {
            spinGlobe();
        });

        map.on('style.load', () => {
            // map.current.setFog({}); // Set the default atmosphere style
            map.addControl(new mapboxgl.NavigationControl());
            map.setProjection('globe');
        });
    })

    return (
        <main>
            <div className="map-container" id="map-container" ref={mapContainer} />
        </main>
    );
};
export default Map;