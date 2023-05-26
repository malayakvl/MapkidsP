import Head from "next/head";
import React from "react";
import Map from '../../components/TMap/index';

// import mapboxgl from 'mapbox-gl';
// import './Map.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


export default function Home() {
    return (
        <></>
        // <Map />
    );
}

export async function getServerSideProps() {
  const locale = "en";

  return {
    props: {
      locale,
    },
  };
}
