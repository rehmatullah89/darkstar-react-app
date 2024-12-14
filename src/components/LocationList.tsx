import React from 'react';
import Image from "next/image";
import dentistIcon from '../../public/assets/shine-search/stethoscope_icon.svg'
import loactionIcon from '../../public/assets/shine-search/pin-location-icon.svg'
import distanceIcon from '../../public/assets/shine-search/distanceIcon.svg'
import optimal from '../../public/assets/shine-search/dental-optimal.png'
import dentalDentist from '../../public/assets/shine-search/dentalDentist.png'
import dentalPharmacy from '../../public/assets/shine-search/dentalPharmacy.png'
import phoneIcon from '../../public/assets/shine-search/icon-phone.svg'
import directionIcon from '../../public/assets/shine-search/icon-direction.png'

interface Location {
  STORE_NAME?: string;
  DOCTORS?: string;
  ADDRESS1: string;
  CITY: string;
  STATE: string;
  ZIP: string;
  PHONE_NO?: string;
  LATITUDE?: number;
  LONGITUDE?: number;
  distance?: number;
  [key: string]: any; // Allow additional properties
}

interface LocationListProps {
  locations: Location[];
  onLocationClick: (location: Location) => void;
}

const getGoogleMapsLink = (lat: number, lng: number) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
};

const LocationList: React.FC<any> = ({ locations, onLocationClick }) => {

  const convertToMiles = (distanceInKm: number) => {
    return (distanceInKm / 1.60934).toFixed(2); // Convert kilometers to miles
  };
  const imageSources = {
    Optical: optimal,
    Pharmacy: dentalPharmacy,
    Dentist: dentalDentist
  };
  return (
    <div className="location-list">
      {locations.length > 0 ? <div className='foundTotalResults'>(<span className='results-found'>{locations.length}</span> Locations Near You!)</div> : ''}
      {locations.length > 0 ? (
        locations.map((location, index) => (
          <div
            key={index}
            className="location-item"
            onClick={() => onLocationClick(location)}
          >
            <div className="location-info-inner">
              <h3>
              <Image src={imageSources[location.CATEGORY]} alt="" width={22} height={29} />
              {location.STORE_NAME ? location.STORE_NAME : location.DOCTORS}</h3>
              {!(location?.DOCTORS?.includes("N/A")) && (
                <p className="locationDoctor">  <div className='row-div'><div className='icon-image'><Image src={dentistIcon} alt="" width={20} height={20} /></div><div className='text-detail'> <span className='titleDe'>Doctor(s):</span> {location.DOCTORS}</div></div></p>
              )}              
              <p className="addressDoctor"> <div className='row-div'><div className='icon-image'><Image src={loactionIcon} alt="" width={20} height={20} /></div><div className='text-detail'>  <span className='titleDe'>Address:</span> {location.ADDRESS1}, {location.CITY}, {location.STATE} {location.ZIP.toString().padStart(5, '0')}</div></div></p>
              <p className="latLongDoctor">Latitude: {location.LATITUDE}, Longitude: {location.LONGITUDE}</p>
              {location.distance && <p className="distanceDoctor"><div className='row-div'><div className='icon-image'><Image src={distanceIcon} alt="" width={20} height={20} /></div><div className='text-detail'> <span className='titleDe'>Distance:</span> {(location.distance.toFixed(2))} miles</div></div></p>}

            <div className='rowButtonDirection'>            
              {location.PHONE_NO && (
                <p className="phoneNumber">
                  <div className='row-div'>
                    <div className='text-detail'>
                      <a className='flex-item callItem' href={`tel:${location.PHONE_NO}`}> <Image src={phoneIcon} alt="Phone" width={20} height={20} /> <span className='textCnt'> Call</span></a>
                    </div>
                  </div>
                </p>
              )}
              {location.LATITUDE && location.LONGITUDE && (
                <p className="directionLink">
                  <div className='row-div'>
                    <div className='text-detail'>
                      <a className='flex-item callItem'  href={getGoogleMapsLink(location.LATITUDE, location.LONGITUDE)} target="_blank" rel="noopener noreferrer">
                      <Image src={directionIcon} alt="Directions" width={20} height={20} />
                      <span className='textCnt'> Get Directions</span>
                      </a>
                    </div>
                  </div>
                </p>
              )}

            </div>

            </div>
          </div>
        ))
      ) : (
        <p className='no-location-found-text'>No locations found.</p>
      )}
      <style jsx>{`
        .location-list {
          width: 100%;
          height: 100%;
          border-right: 1px solid #e4e4e4;
          padding: 10px;
        }
        .flex-item{
          display:flex;
          display: flex;
          align-items: center;
          justify-content: center;

        }
        .location-item {
          padding: 10px 10px;
          cursor: pointer;
          padding-bottom: 0;
        }
        .location-item:hover {
          background-color: #ecf5f9;
        }
        .textCnt {
          padding-left: 7px;padding-right: 8px;
      }
        .row-div{ display:flex; align-items-center; column-gap:10px;}
        .latLongDoctor{ display:none;}
        .location-item h3{
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          color: #565759;

          line-height: 1.2;
          text-align: left;
          margin-bottom: 17px;
          text-transform: capitalize;
          text-decoration: unset;
          margin-bottom: 5px;
          text-transform: uppercase;
          background-repeat: no-repeat;
          background-color: transparent;
          background-position: left;
          background-size: 30px;
          padding-left: 0px;
          display: flex;
          align-items: center;
          column-gap: 10px;
          font-weight: 500;
          letter-spacing: 0.02em;
      }
        .locationDoctor img{
          max-width: 20px;
        }
        .addressDoctor img{
          max-width: 20px;
        }
        .titleDe {
          font-weight: 600;
          font-size: 14px;
          display:none;
      }
        .location-item p,.location-item a{
          padding-left: 4px;
          font-size: 15px;
          color: #565759;
          font-family: "Open Sans", "BlinkMacSystemFont", -apple-system, "Roboto", "Lucida Sans";
          margin-bottom: 3px;
          line-height: 1.4;
          border-bottom: 1px solid #e4e4e4;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }   
        .location-item a:hover{
          background-color: #eee;
        }
        .location-info-inner {
          padding-top: 1rem;
      }
      .no-location-found-text {
        text-align: center;
        font-size: 20px;
        margin-top:1rem;
      }
      .location-item a{
        text-decoration:none;
        border-bottom: 0;
      } 

      .rowButtonDirection {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: flex-start;

    }
    .rowButtonDirection p{ border:0;}
      .rowButtonDirection a{
        background: #fff;
        border: 1px solid #dadce0;
        box-shadow: none;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        border-radius: 32px;
        box-sizing: border-box;
        color: #202124;
        cursor: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 32px;
        margin: 8px 0;
        padding: 0 12px;
        position: relative;
      }
      .rowButtonDirection .directionLink a{

      }
      .rowButtonDirection .text-detail
      ,.rowButtonDirection > p
      {
        // width: 100%;
      }
      .foundTotalResults {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        color: #565759;
        line-height: 1.2;
        background: #ecf5f9;
        padding: .5rem;
        /* border: 1px solid #eee; */
        margin-bottom: 0.5rem;
        font-weight: 500;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
        display: block;
        /* justify-content: center; */
        max-width: 245px;
        width: 100%;    border-radius: 3px;
    }
    .foundTotalResults span{ 
      font-weight: 700;
      color: #3997cc;

    }

    @media (max-width: 767px) {
      .location-item p,.location-item a{
        font-size: 13px;
      }
      .location-item h3{
        font-size: 14px;
      }
      .location-info-inner {
        padding-top: 0.5rem;
    }
    }

      `}</style>
    </div>
  );
}

export default LocationList;
