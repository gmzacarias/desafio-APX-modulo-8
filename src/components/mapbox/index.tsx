// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import css from "./mapbox.css";


// type Props = {
//     location: any;
// };
// export default function Mapbox({ location }: Props) {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-58.3815704);
//     const [lat, setLat] = useState(-34.6037389);
//     const [zoom, setZoom] = useState(9);

//     useEffect(() => {
//         mapboxgl.accessToken = "pk.eyJ1IjoiZ216YWNhcmlhcyIsImEiOiJjbGFuc3o5eDgwaWRjM25zNHV0YWQzNjNnIn0.mB9Bx5JB1odq3Oq6vb4OcQ";
//         console.log(mapboxgl.accessToken)
//         const map = new mapboxgl.Map({
//             container: mapContainer.current!,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom,
//         });


//         // Espera a que el mapa cargue antes de agregar la capa
//         map.on('load', function () {
//             // Agrega un marcador inicial en el centro del mapa
//             map.addSource('marker', {
//               type: 'geojson',
//               data: {
//                 type: 'FeatureCollection',
//                 features: [
//                   {
//                     type: 'Feature',
//                     geometry: {
//                       type: 'Point',
//                       coordinates: [lng, lat],
//                     },
//                   },
//                 ],
//               },
//             });

//             map.addLayer({
//               id: 'marker',
//               source: 'marker',
//               type: 'circle',
//               paint: {
//                 'circle-radius': 10,
//                 'circle-color': '#007cbf',
//               },
//             });
//         });

//         // Centra el mapa en la ubicación seleccionada y agrega un marcador
//         const handleLocationSelect = (selectedLocation: any) => {
//             map.flyTo({
//               center: selectedLocation.center,
//               zoom: 14,
//             });
//             if (map.getSource('marker')) {
//               map.getSource('marker')!.setData(selectedLocation.geometry);
//             }
//           };

//         // Actualiza el centro del mapa cuando cambia la ubicación
//         if (location) {
//             setLng(location.center[0]);
//             setLat(location.center[1]);
//             setZoom(14);
//             handleLocationSelect(location);
//         }
//     }, [location]);


//     return (
//         <div>
//             {/* <div className="sidebar">
//                 Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//             </div> */}
//             <div ref={mapContainer} className={css.mapContainer} />
//         </div>
//     );
// }

// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import css from "./mapbox.css";
// import { MapboxSearch } from '../ui/inputs/';

// type Props = {
//     location: any;
// };

// export default function Mapbox({ location }: Props) {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-58.3815704);
//     const [lat, setLat] = useState(-34.6037389);
//     const [zoom, setZoom] = useState(9);
//     const [selectedLocation, setSelectedLocation] = useState(null);

//     useEffect(() => {
//         mapboxgl.accessToken = "pk.eyJ1IjoiZ216YWNhcmlhcyIsImEiOiJjbGFuc3o5eDgwaWRjM25zNHV0YWQzNjNnIn0.mB9Bx5JB1odq3Oq6vb4OcQ";
//         const map = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom,
//         });

//         // Espera a que el mapa cargue antes de agregar la capa
//         map.on('load', function () {
//             // Agrega un marcador inicial en el centro del mapa
//             map.addSource('marker', {
//                 type: 'geojson',
//                 data: {
//                     type: 'FeatureCollection',
//                     features: [
//                         {
//                             type: 'Feature',
//                             geometry: {
//                                 type: 'Point',
//                                 coordinates: [lng, lat],
//                             },
//                         },
//                     ],
//                 },
//             });

//             map.addLayer({
//                 id: 'marker',
//                 source: 'marker',
//                 type: 'circle',
//                 paint: {
//                     'circle-radius': 10,
//                     'circle-color': '#007cbf',
//                 },
//             });
//         });

//         // Actualiza el centro del mapa cuando cambia la ubicación
//         const handleLocationSelect = (selectedLocation: any) => {
//             map.flyTo({
//                 center: selectedLocation.center,
//                 zoom: 14,
//             });
//             if (map.getSource('marker')) {
//                 map.getSource('marker')!.setData(selectedLocation.geometry);
//             }
//             setSelectedLocation(selectedLocation); // actualiza el estado del marcador seleccionado
//         };

//         // Centra el mapa en la ubicación seleccionada y agrega un marcador
//         if (location) {
//             setLng(location.center[0]);
//             setLat(location.center[1]);
//             setZoom(14);
//             handleLocationSelect(location);
//         }
//     }, [location]);

//     // Manejador para buscar una ubicación
//     const handleSearch = (selectedLocation: any) => {
//         setSelectedLocation(selectedLocation);
//     }

//     return (

//         <div>
//            <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />

//         </div>
//     )
// }

// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import css from "./mapbox.css";
// import { MapboxSearch } from '../ui/inputs/';

// type Props = {
//     location: any;
// };

// export default function Mapbox({ location }: Props) {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-58.3815704);
//     const [lat, setLat] = useState(-34.6037389);
//     const [zoom, setZoom] = useState(9);
//     const [selectedLocation, setSelectedLocation] = useState(null);

//     useEffect(() => {
//         mapboxgl.accessToken = "pk.eyJ1IjoiZ216YWNhcmlhcyIsImEiOiJjbGFuc3o5eDgwaWRjM25zNHV0YWQzNjNnIn0.mB9Bx5JB1odq3Oq6vb4OcQ";
//         const mapInstance = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom,
//         });

//         // Espera a que el mapa cargue antes de agregar la capa
//         mapInstance.on('load', function () {
//             // Agrega un marcador inicial en el centro del mapa
//             mapInstance.addSource('marker', {
//                 type: 'geojson',
//                 data: {
//                     type: 'FeatureCollection',
//                     features: [
//                         {
//                             type: 'Feature',
//                             geometry: {
//                                 type: 'Point',
//                                 coordinates: [lng, lat],
//                             },
//                         },
//                     ],
//                 },
//             });

//             mapInstance.addLayer({
//                 id: 'marker',
//                 source: 'marker',
//                 type: 'circle',
//                 paint: {
//                     'circle-radius': 10,
//                     'circle-color': '#007cbf',
//                 },
//             });
//         });

//         // Actualiza el centro del mapa cuando cambia la ubicación
//         const handleLocationSelect = (selectedLocation: any) => {
//             mapInstance.flyTo({
//                 center: selectedLocation.center,
//                 zoom: 14,
//             });
//             if (mapInstance.getSource('marker')) {
//                 mapInstance.getSource('marker')!.setData(selectedLocation.geometry);
//             }
//             setSelectedLocation(selectedLocation); // actualiza el estado del marcador seleccionado
//         };

//         // Centra el mapa en la ubicación seleccionada y agrega un marcador
//         if (location) {
//             setLng(location.center[0]);
//             setLat(location.center[1]);
//             setZoom(14);
//             handleLocationSelect(location);
//         }

//         // Limpia el mapa al desmontar el componente
//         return () => {
//             mapInstance.remove();
//         }
//     }, [location]);

//     // Manejador para buscar una ubicación
//     const handleSearch = (selectedLocation: any) => {
//         setSelectedLocation(selectedLocation);
//     }

//     return (
//         <div>
//             <MapboxSearch onSearch={handleSearch} />
//             <div
//                 ref={mapContainer}
//                 className="map-container"
//             />
//         </div>
//     )
// }


// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import css from "./mapbox.css";
// import { MapboxSearch } from '../ui/inputs/';

// type Props = {
//     location: any;
    
// };

// export default function Mapbox({ location }: Props) {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-58.3815704);
//     const [lat, setLat] = useState(-34.6037389);
//     const [zoom, setZoom] = useState(9);
//     const [selectedLocation, setSelectedLocation] = useState(null);
//     const [searchText, setSearchText] = useState('');

//     useEffect(() => {
//         mapboxgl.accessToken = "pk.eyJ1IjoiZ216YWNhcmlhcyIsImEiOiJjbGFuc3o5eDgwaWRjM25zNHV0YWQzNjNnIn0.mB9Bx5JB1odq3Oq6vb4OcQ";
//         const mapInstance = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom,
//         });

//         // Espera a que el mapa cargue antes de agregar la capa
//         mapInstance.on('load', function () {
//             // Agrega un marcador inicial en el centro del mapa
//             mapInstance.addSource('marker', {
//                 type: 'geojson',
//                 data: {
//                     type: 'FeatureCollection',
//                     features: [
//                         {
//                             type: 'Feature',
//                             geometry: {
//                                 type: 'Point',
//                                 coordinates: [lng, lat],
//                             },
//                         },
//                     ],
//                 },
//             });

//             mapInstance.addLayer({
//                 id: 'marker',
//                 source: 'marker',
//                 type: 'circle',
//                 paint: {
//                     'circle-radius': 10,
//                     'circle-color': '#007cbf',
//                 },
//             });
//         });

//         // Actualiza el centro del mapa cuando cambia la ubicación
//         const handleLocationSelect = (selectedLocation: any) => {
//             mapInstance.flyTo({
//                 center: selectedLocation.center,
//                 zoom: 14,
//             });
//             if (mapInstance.getSource('marker')) {
//                 mapInstance.getSource('marker')!.setData(selectedLocation.geometry);
//             }
//             setSelectedLocation(selectedLocation); // actualiza el estado del marcador seleccionado
//         };

//         // Centra el mapa en la ubicación seleccionada y agrega un marcador
//         if (location) {
//             setLng(location.center[0]);
//             setLat(location.center[1]);
//             setZoom(14);
//             handleLocationSelect(location);
//         }

//         // Limpia el mapa al desmontar el componente
//         return () => {
//             mapInstance.remove();
//         }
//     }, [location]);

//     // Manejador para buscar una ubicación
//     const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const searchInput = event.currentTarget.elements.namedItem('search') as HTMLInputElement;
//         const searchQuery = searchInput.value;
//         const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${mapboxgl.accessToken}`;
      
//         fetch(geocodeUrl)
//           .then(response => response.json())
//           .then(data => {
//             if (data.features.length === 0) {
//               throw new Error('No se encontró ninguna ubicación');
//             }
//             const selectedLocation = {
//               center: data.features[0].center,
//               place_name: data.features[0].place_name,
//               geometry: {
//                 type: 'Point',
//                 coordinates: data.features[0].center,
//               },
//             };
//             handleLocationSelect(selectedLocation);
//           })
//           .catch(error => {
//             console.error(error);
//             alert('No se pudo encontrar la ubicación');
//           });
//       }
    

//     return (
//         <div>
//             <MapboxSearch onSearch={handleSearch} />
//             <div ref={mapContainer} className='map-container' />

//         </div>
//     )
// }

