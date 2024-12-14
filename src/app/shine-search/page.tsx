"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LocationSearch from '@/components/LocationSearch';
import LocationList from '@/components/LocationList';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { SearchType } from '@/utils/types';
import { BASE_URL } from '@/utils/constants';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

interface Location {
  lat: number;
  lng: number;
  [key: string]: any;
}

export default function Home() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentLocation, setCurrentLocation] = useState<Location>({ lat: 38.573936, lng: -92.60376 });
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [clearMap, setClearMap] = useState<boolean>(false);
  const [explicitSearch, setExplicitSearch] = useState<SearchType | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Ensure that client-specific operations happen after the initial render
    setCurrentLocation({ lat: 38.573936, lng: -92.60376 });
    if (searchParams && searchParams.toString()) {
      const search: SearchType = {
        keyword: searchParams.get('keyword') ?? 'null',
        category: searchParams.get('category') ?? 'null',
        distance: searchParams.get('distance') ?? 'null',
        latitude: searchParams.get('latitude') ?? 'null',
        longitude: searchParams.get('longitude') ?? 'null',
      };
      
      if (search.latitude && search.longitude) {
        const lat = parseFloat(search.latitude);
        const lng = parseFloat(search.longitude);

        if (!isNaN(lat) && !isNaN(lng)) {
          setCurrentLocation({ lat, lng });
        } else {
          console.error('Invalid latitude or longitude values.');
        }
      }

      setExplicitSearch(search);
    }
  }, [searchParams]);

  const handleClearMap = () => {
    setClearMap(true);
    setTimeout(() => setClearMap(false), 100); // Reset clearMap to false after clearing markers
  };

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleSetLocations = (newLocations: Location[]) => {
    setLocations(newLocations);
  };

  return (
    <div className="container-full-width">
      <div className="sidebar-wrapper">
        <div className="logo-wrap-smilebrilliant">
          <a className="logo-wrap-smilebrilliant-logo" href={`${BASE_URL}`}>
            <span className="sbr-logo-round">
              <Image
                src={`${BASE_URL}/assets/images/sbr-logo.webp`}
                alt="logo"
                width={46}
                height={46}
              />
            </span>
            <span className="sbr-logo-text">
              <Image
                src={`${BASE_URL}/wp-content/themes/revolution-child/assets/images/sbr-logo-text.webp`}
                alt="logo"
                width={144}
                height={12.38}
              />
            </span>
          </a>
        </div>

        <div className="tpWrapper">
          <h1 className="hideMobile location-search-heading">
            <strong>SH<span className="styleColor">!</span>NE</strong> Location Search
          </h1>
          <div className="locationOption">
            <LocationSearch
              setLocations={handleSetLocations}
              currentLocation={currentLocation}
              setCurrentLocation={setCurrentLocation}
              setLoading={setLoading}
              clearMap={handleClearMap}
              explicitSearch={explicitSearch}
            />
          </div>
        </div>
        <div className="readMoreShadowMobile"></div>
        <div className="sidebar-inner-scoller">
          <LocationList locations={locations} onLocationClick={handleLocationClick} />
        </div>
      </div>

      <div className="map-container map-container-wrapper">
        {loading && (
          <div className="loader profile-main-loader">
              <svg className="circular-loader"viewBox="25 25 50 50" >
              <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
            </svg>
          </div>
        )}
        <Map
          locations={locations}
          currentLocation={currentLocation}
          selectedLocation={selectedLocation}
          setLoading={setLoading}
          clearMap={handleClearMap}
        />
      </div>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        .container-full-width {
          display: flex;
          height: 100vh;
      }
        .tpWrapper{
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .styleColor{
          color: #f0c23a;
        }
        .sidebar {
          flex: 1;
          overflow-y: auto;
          overflow-x:hidden;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .loader svg {
          max-width: 150px;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
      }



      
      .circular-loader {
        -webkit-animation: rotate 2s linear infinite;
                animation: rotate 2s linear infinite;
        height: 100%;
        -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
                transform-origin: center center;
              width: 100%;
              position: absolute;
              top: 0;
              left: 0;
              margin: auto;
      }
      
      .loader-path {
        stroke-dasharray: 150,200;
        stroke-dashoffset: -10;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }
      
      @-webkit-keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      
      @keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      @-webkit-keyframes dash {
        0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -124;
        }
      }
      @keyframes dash {
        0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -124;
        }
      }
      @-webkit-keyframes color {
        0% {
          stroke: #f0c23a;
        }
        40% {
          stroke: #f0c23a;
        }
        66% {
          stroke: #f0c23a;
        }
        80%, 90% {
          stroke: #f0c23a;
        }
      }
      @keyframes color {
        0% {
          stroke: #f0c23a;
        }
        40% {
          stroke: #f0c23a;
        }
        66% {
          stroke: #f0c23a;
        }
        80%, 90% {
          stroke: #f0c23a;
        }
      }
      

        .map-container {
          flex: 2;
          height: 50vh;
          position: relative;
        }
        .logo-wrap-smilebrilliant-logo {
          width: 100%;
          position: relative;
          margin: 0;
          max-width: 250px;
      }
        .logo-wrap-smilebrilliant{
          justify-content: center;
          margin-bottom: 1rem;
        }
        .logo-wrap-smilebrilliant-logo {
          display: flex;
          align-items: center;
          column-gap: 15px;
        }
        .loader {
          position: fixed;
          top: 0%;
          left: 0%;
          // transform: translate(-50%, -50%);
          font-size: 20px;
          font-weight: bold;
          color: #555;
          background: #00000080;
          z-index: 12345;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .location-search-heading{
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          color: #222;
          // font-weight: 800;
          line-height: 1.2;
          text-align: left;
          padding-left: 10px;
          text-transform: uppercase;
          margin-bottom: 15px;
          margin-top: 25px;
          padding-top: 3.5rem;
        }
        .sidebar-wrapper {
          position: fixed;
          padding: 1rem 0;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 500px;
          z-index: 111;
          z-index: 992;
          background: #fff;
          height: calc(100vh - 0rem);
          padding-top: 24px;
          border-right: 1px solid #e4e4e4;
          overflow-y: auto;  overflow-y: auto
      }

      .location-search input, .location-search select {
        margin: 0;
        padding: 0.375rem 2.25rem 0.375rem 0.75rem;
        -moz-padding-start: calc(0.75rem - 3px);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 16px 12px;
        border: 1px solid #e4e4e4;
        border-radius: 0.25rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin-bottom: 0px;
    }

      .map-container-wrapper {
        margin-left: 500px;
    }
        @media (min-width: 768px) {
          .container {
            flex-direction: row;
          }
          .map-container {
            height: 100%;
          }
          .sidebar-inner-scoller {
            height: calc(100vh - 4rem);
         }
        }


        @media (max-width: 990px) {
          .logo-wrap-smilebrilliant{ display:none;}
          .container-full-width{
            flex-direction: column;
          }

          .sidebar-wrapper{order:2; }
          .map-container-wrapper{order:1;}
          .map-container-wrapper {
            margin-left: 0px;
            height: calc(100vh - 50%);
          }
          .sidebar-wrapper{
            width: 100%;
            max-width: 100%;
          }

          .sidebar-wrapper {
            position: static;
            // order: 2;
            padding-top: 1rem;
            height: auto;
            max-height: calc(100vh - 40%);
            padding-bottom: 2rem;
            -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
            -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
            box-shadow: 0px -9px 23px rgba(50, 50, 50, 0.40);  
          }
        }
        @media (max-width: 767px) {

          .iconForBalnced{
            left: 3px;
            top: 4px;
          }
          .tpWrapper{ position:relative; z-index:8888;}

          .location-search-heading{
            padding-top: 0rem;
              margin-bottom: 0px;
              margin-top: 0px;
          }

          .readMoreShadowMobile{
            // box-sizing: border-box;
            // position: absolute;
            // width: 100%;
            // height: 100px;
            // bottom: 0px;
            // background: linear-gradient(rgba(38, 38, 38, 0) 0%, rgb(38, 38, 38) 100%);
          }
        }

        @media (max-width: 400px) {
          .location-search-heading{
            font-size: 20px;
          }
        }

      `}</style>
    </div>
  );
}
