import React, { useRef, useEffect } from 'react';
import mapboxgl from "mapbox-gl";

const Map = () => {
    const mapContainer = useRef<any>(null);
    // console.log(mapContainer)
    // const map = useRef<mapboxgl.Map | any>(null);

    // @ts-ignore
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFsYXlha3ZsIiwiYSI6ImNsY3Jxb3FhdzBiY3Qzd3BjMDRzYjVvZmEifQ.asLancy_a5ZTUNZHVRCSaA';
        // const map = new mapboxgl.Map({
        //     container: 'map-container',
        //     style: 'mapbox://styles/mapbox/streets-v12',
        //     projection: {
        //         name: 'equalEarth'
        //     }, // Display the map as a globe, since satellite-v9 defaults to Mercator
        //     zoom: 2,
        //     center: [-90, 40]
        // });
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-100.486052, 37.830348],
            zoom: 2
        });
        const start = {
            center: [80, 36],
            zoom: 1,
            pitch: 0,
            bearing: 0
        };
        const end = {
            center: [8.11862, 46.58842],
            zoom: 12.5,
            bearing: 130,
            pitch: 75
        };
        // const map = new mapboxgl.Map({
        //     container: 'map',
        //     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        //     style: 'mapbox://styles/mapbox/streets-v12',
        //     center: [-100.486052, 37.830348],
        //     projection: {name: 'globe'},
        //     zoom: 2,
        // });
        let hoveredPolygonId: any = null;

        map.on('load', () => {
            // map.addSource('states', {
            //     'type': 'geojson',
            //     'data': 'countries.geojson'
            //     // 'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
            // });

            // map.addSource('mapbox-dem', {
            //     'type': 'raster-dem',
            //     'url': 'mapbox://mapbox.terrain-rgb'
            // });
            //
            // map.setTerrain({
            //     'source': 'mapbox-dem',
            //     'exaggeration': 1.5
            // });

        // The feature-state dependent fill-opacity expression will render the hover effect
        // when a feature's hover state is set to true.
        // map.addLayer({
        //     'id': 'state-fills',
        //     'type': 'fill',
        //     'source': 'states',
        //     'layout': {},
        //     'paint': {
        //         'fill-color': '#DBDDFD',
        //         'fill-opacity': [
        //         'case',
        //         ['boolean', ['feature-state', 'hover'], false],
        //             1,
        //             0.5
        //         ]
        //     }
        // });

        // map.addLayer({
        //     'id': 'state-borders',
        //     'type': 'line',
        //     'source': 'states',
        //     'layout': {},
        //     'paint': {
        //     'line-color': '#627BC1',
        //     'line-width': 2
        //     }
        // });

        // When the user moves their mouse over the state-fill layer, we'll update the
        // feature state for the feature under the mouse.
        // map.on('mousemove', 'state-fills', (e) => {
        //     if ((e as any).features.length > 0) {
        //         if (hoveredPolygonId !== null) {
        //         map.setFeatureState(
        //         { source: 'states', id: hoveredPolygonId },
        //         { hover: false }
        //         );
        //     }
        //     hoveredPolygonId = (e as any).features[0].id;
        //     map.setFeatureState(
        //         { source: 'states', id: hoveredPolygonId },
        //         { hover: true }
        //         );
        //     }
        // });

        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        // map.on('mouseleave', 'state-fills', () => {
        //     if (hoveredPolygonId !== null) {
        //         map.setFeatureState(
        //             { source: 'states', id: hoveredPolygonId },
        //             { hover: false }
        //         );
        //     }
        //         hoveredPolygonId = null;
        //     });
        });


        // let hoveredPolygonId = null;
        map.on('style.load', () => {
            console.log('Try to setup fog');
            // map.setFog({
            //     'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
            //     // 'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
            //     'horizon-blend': 0.4 // Exaggerate atmosphere (default is .1)
            // })
            // @ts-ignore
            // @ts-ignore
            // map.setFog({
            //     'range': [-1, 2],
            //     'horizon-blend': 0.3,
            //     'color': 'white',
            //     'high-color': '#add8e6',
            //     'space-color': '#d8f2ff',
            //     'star-intensity': 0.0
            // });
            // map.setFog({}); // Set the default atmosphere style
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
        // const secondsPerRevolution = 120;
// Above zoom level 5, do not rotate.
        // const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
//         const slowSpinZoom = 3;
//
//         let userInteracting = false;
//         let spinEnabled = true;
//
//         function spinGlobe() {
//             const zoom = map.getZoom();
//             if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
//                 let distancePerSecond = 360 / secondsPerRevolution;
//                 if (zoom > slowSpinZoom) {
// // Slow spinning at higher zooms
//                     const zoomDif =
//                         (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
//                     distancePerSecond *= zoomDif;
//                 }
//                 const center = map.getCenter();
//                 center.lng -= distancePerSecond;
// // Smoothly animate the map over one second.
// // When this animation is complete, it calls a 'moveend' event.
//                 map.easeTo({ center, duration: 1000, easing: (n) => n });
//             }
//         }
//
//         // Pause spinning on interaction
//         map.on('mousedown', () => {
//             userInteracting = true;
//         });
//
// // Restart spinning the globe when interaction is complete
//         map.on('mouseup', () => {
//             userInteracting = false;
//             spinGlobe();
//         });
//
// // These events account for cases where the mouse has moved
// // off the map, so 'mouseup' will not be fired.
//         map.on('dragend', () => {
//             userInteracting = false;
//             spinGlobe();
//         });
//         map.on('pitchend', () => {
//             userInteracting = false;
//             spinGlobe();
//         });
//         map.on('rotateend', () => {
//             userInteracting = false;
//             spinGlobe();
//         });
//
// // When animation is complete, start spinning if there is no ongoing interaction
//         map.on('moveend', () => {
//             spinGlobe();
//         });
//
//         map.on('style.load', () => {
//             // map.current.setFog({}); // Set the default atmosphere style
//             map.addControl(new mapboxgl.NavigationControl());
//             // map.setProjection('globe');
//         });
    })

    return (
        <main>
            <div className="map-container" id="map-container" ref={mapContainer} />
            // <div className="map" id="map"  />
        </main>
    );
};
export default Map;
