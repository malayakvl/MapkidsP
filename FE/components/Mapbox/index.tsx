import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// mapboxgl.accessToken =
//     'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFsYXlha3ZsIiwiYSI6ImNsaTNoNWFkazJoZ2czZG50cWxzbTdiM3AifQ.cgC57yh5XndCAViVIgeV1w';


const MapboxMap = () => {
    const [map, setMap] = React.useState<mapboxgl.Map>();
    const mapNode = React.useRef(null);

    React.useEffect(() => {
        const node = mapNode.current;
        // если объект window не найден,
        // то есть компонент рендерится на сервере
        // или dom node не инициализирована, то ничего не делаем
        if (typeof window === "undefined" || node === null) return;

        // иначе создаем инстанс карты передавая ему ссылку на DOM ноду
        // а также accessToken для mapbox
        const mapboxMap = new mapboxgl.Map({
            container: node,
            accessToken: mapboxgl.accessToken,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40],
            zoom: 9,
        });

        // и сохраняем созданный объект карты в React.useState
        setMap(mapboxMap);

        // чтобы избежать утечки памяти удаляем инстанс карты
        // когда компонент будет демонтирован
        return () => {
            mapboxMap.remove();
        };
    }, []);

    return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapboxMap
