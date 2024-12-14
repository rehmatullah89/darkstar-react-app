// LocationSearch.tsx
import { useState, ChangeEvent, KeyboardEvent, Suspense, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios';
import Script from 'next/script';
import { SearchType } from '@/utils/types';
import { capitalizeFirstLetter } from '@/utils/helpers';
import directionIcon from '../../public/assets/shine-search/pulsing-location-pin.svg'
import dropDownIcon from '../../public/assets/shine-search/dropdownCat.svg'
import chevronDown from '../../public/assets/shine-search/chevron-down.svg'
import CustomSelect from './CustomSelect';

const libraries = ['places'];

interface LocationSearchProps {
  setLocations: (locations: any[]) => void;
  currentLocation: { lat: number; lng: number };
  setCurrentLocation: (location: { lat: number; lng: number }) => void;
  setLoading: (loading: boolean) => void;
  clearMap: () => void;
  explicitSearch: SearchType | null;
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function LocationSearch({
  setLocations,
  currentLocation,
  setCurrentLocation,
  setLoading,
  clearMap,
  explicitSearch
}: LocationSearchProps) {
  const [query, setQuery] = useState<string | number>('');
  const [category, setCategory] = useState<string>('Dentist');
  const [radius, setRadius] = useState<string>('10'); // Default to 10 Miles
  const [useCurrentLocation, setUseCurrentLocation] = useState<boolean>(true);
  const [explicitExecuted, setExplicitExecuted] = useState<boolean>(false);
  const [useZipCode, setUseZipCode] = useState<boolean>(false);
  
  useEffect(()=>{    
    if(explicitSearch && !explicitExecuted){
      explicitSearch.keyword && setQuery(explicitSearch.keyword)
      setCategory(explicitSearch.category ? capitalizeFirstLetter(explicitSearch.category) : "");
      explicitSearch.distance && setRadius(explicitSearch.distance)
      
      if (explicitSearch.latitude && explicitSearch.longitude) {
        const lat = parseFloat(explicitSearch.latitude.toString());
        const lng = parseFloat(explicitSearch.longitude.toString());

        if (!isNaN(lat) && !isNaN(lng)) {
          setCurrentLocation({ lat, lng });
          setUseCurrentLocation(true);
          setUseZipCode(false); // Ensure only one checkbox is selected
        } else {
          console.error('Invalid latitude or longitude values provided in explicit search.');
        }
      }

      if (explicitSearch.keyword && explicitSearch.keyword !== '') {
        setUseZipCode(true);
        setUseCurrentLocation(false);
      }

      // Trigger search if query/zipcode is filled
      if (query !== '') {
        handleSearch();
        setExplicitExecuted(true);
      }
    } 
    },[explicitSearch, query]);
    
  const handleSearch = async (): Promise<void> => {
    setLoading(true);
    try {
      let center = currentLocation;

      if (useCurrentLocation) {
        // Use the browser's current location
        setQuery('');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setCurrentLocation(center);
              fetchLocations(center);
              window.scrollTo({
                top: 0,
                behavior: 'smooth', // Adds smooth scrolling effect
              });
            },
            (error) => {
              if (error.code === error.PERMISSION_DENIED) {
                alert('Location permission was denied. Please allow access manually from your browser settings to use your current location.');
                setUseCurrentLocation(false); // Uncheck the checkbox if permission is denied
                setUseZipCode(true);
                setLoading(false);
              }
            }
          );
        } else {
          alert('Geolocation is not supported by this browser.');
          setLoading(false);
        }
      } else {
        if (!isNaN(Number(query))) {
          // Fetch coordinates for the zip code
          const geoResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
              address: query,
              key: GOOGLE_MAPS_API_KEY,
            },
          });

          if (geoResponse && geoResponse.data && geoResponse.data.results && geoResponse.data.results.length > 0) {
              const { lat, lng } = geoResponse.data.results[0].geometry.location;
              const center = { lat, lng };
              setCurrentLocation(center);
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
          } else {
              console.error("Geocoding API did not return a valid response or the address could not be found. Using user's current location as fallback.");
              
              // Check if the browser supports geolocation
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                      (position) => {
                          const { latitude, longitude } = position.coords;
                          const center = { lat: latitude, lng: longitude };
                          setCurrentLocation(center);
                      },
                      (error) => {
                          console.error("Error getting the user's current location:", error);
                          // Handle the error or provide a fallback here
                      }
                  );
              } else {
                  console.error("Geolocation is not supported by this browser.");
                  // Provide a fallback here, such as setting a default location
              }
          }        
        }
        fetchLocations(center);
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
      setLoading(false);
    }
  };

  const fetchLocations = async (center: { lat: number; lng: number }): Promise<void> => {
    try {
      const params: any = {
        name: query,
        category: category || "",
        lat: center.lat,
        lng: center.lng,
      };
  
      if (!query) {
        params.radius = radius; // Only include radius if query is empty
      }
  
      const response = await axios.get(`/search-locations/locations`, { params });
      setLocations(response.data);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = (): void => {
    setQuery("");
    setCategory("Dentist");
    setRadius("10");
    setLocations([]);
    clearMap(); // Clear the map
    setUseZipCode(false); // Reset to default state
    setUseCurrentLocation(true); // Set "Use my location" to default
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleZipCodeCheckboxChange = (checked: boolean) => {
    setUseZipCode(checked);
    if (checked) {
      setUseCurrentLocation(false); // Uncheck "Use my location" checkbox
    } else {
      setQuery(""); // Reset the ZIP code text field to empty
      setUseCurrentLocation(true); // Automatically check the "Use my location" checkbox
    }
  };

  const handleCurrentLocationCheckboxChange = (checked: boolean) => {
    setUseCurrentLocation(checked);
    if (checked) {
      setUseZipCode(false); // Uncheck "Search by ZIP Code" checkbox
      setQuery(""); // Clear ZIP code input
    } else {
      setUseZipCode(true); // Revert to initial state
      setRadius("10"); // Reset radius to default
    }
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Script
          strategy="lazyOnload"
          id="maps-snippet"
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
        />
      </Suspense>
      
      <div className="location-search">
        <div className='rowDivWrapper'>
          {/* Category Select */}
          <div className="search-flex optionOne noFlexDiv">
            <div className="input-group select-option addIconforBlance">
              <div className="iconForBalnced">
              
              <Image src={dropDownIcon} alt="" width={30} height={30} />
              </div>
              <CustomSelect
                value={category}
                onChange={(newCategory) => setCategory(newCategory)}
              />
            </div>
          </div>
          {/* Radius Dropdown (conditionally rendered) */}
          {useCurrentLocation && (
            <div className="search-flex optionThree ">
              <div className="input-group select-option col-12">
                <select
                  value={radius}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setRadius(e.target.value)}
                >
                  <option value="1">1 Mile</option>
                  <option value="3">3 Miles</option>
                  <option value="5">5 Miles</option>
                  <option value="10">10 Miles</option>
                  <option value="50">50 Miles</option>
                </select>
              </div>
            </div>
          )}
          {/* Conditional Fields */}
          </div>
        <div className="search-flex optionTwo">          
            <div className='wrapperGPS'>
             <div className='generalText rowTwonn'><strong>GPS RESULTS</strong> <span className='hideOnSmallDevice'>(most accurate)</span> </div>                
                <label className="custom-checkbox looksLikeBrdr">
                <div className='wrapperGpsInner'>
                  <input
                    type="checkbox"
                    checked={useCurrentLocation}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleCurrentLocationCheckboxChange(e.target.checked)
                    }
                  />
                  <div className='checkMarkWrapper'>
                  <span className="checkmark"></span>
                  </div>        
                    <div className='userLocationWrapper'>
                      <span className='dotsSelection'>
                        <Image src={directionIcon} alt="" width={20} height={20} />
                      </span>                      
                        <span className='textShowed'>
                        <span className='hiddeMobile'>Use my </span>current location
                        </span>
                    </div>
                    </div>
                </label>
          </div>
          <div className='searchRowWrapperRowOne'>
          <div className='generalText'><strong>GENERAL RESULTS</strong><span className='hideOnSmallDevice'> (less accurate)</span></div>
          <div className='wrapperTo'>
            <label className="custom-checkbox">           
              <input
                type="checkbox"
                checked={useZipCode}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleZipCodeCheckboxChange(e.target.checked)
                }
              />
                <div className='checkMarkWrapper'>
                  <span className="checkmark"></span>   
                </div>       
            </label>
            <div className="input-group">
              <input
                className="search-by-name"
                type="text"
                value={query}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search by ZIP Code"
                disabled={useCurrentLocation}
                autoComplete="off"
                onFocus={() => setQuery('')}
                required
              />
            </div>
            </div>
          </div>         
        </div> 
        <div className="search-flex buttons-group-set">
          <div>
            <button className="search-button buttonCt" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div>
            <button className="reset-button buttonCt" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <style jsx>{`
          .location-search {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px;
          }
          input, select, button {
            flex: 1 1 100%;
          }
          .search-flex { 
            display: flex; 
            flex-wrap: wrap; 
            width: 100%; 
            margin-left: -7px; 
            margin-right: -7px; 
          }
          .search-flex > div { 
            padding-left: 7px; 
            padding-right: 7px;
            width: 100%;
            max-width: 50%;
          }
          .optionOne, .input-group{
            max-width: 100%;
          }  
          .location-search input[type="text"], .location-search select,.looksLikeBrdr .userLocationWrapper{
            margin: 0;
            padding: 0.375rem 2.25rem 0.375rem 0.75rem;
            -moz-padding-start: calc(0.75rem - 3px);
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 16px 12px;
            border: 1px solid #dadce0;
            border-radius: 0.25rem;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            margin-bottom: 0px;    
            width: 100%;
            font-family: "Montserrat", sans-serif;
            min-height: 44px;
          }
          .custom-checkbox{ font-family: "Montserrat", sans-serif;    cursor: pointer;            font-size: 14px;
          font-weight: 400;
          line-height: 1.5;}
          .location-search input[type="text"]:disabled,.location-search select:disabled{
            color: #AAA;
            background: #e4e4e4;
            pointer-events: none;
            cursor: not-allowed;
            border-color: #e4e4e4;
          }
          .custom-checkbox input[type="checkbox"] {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .custom-checkbox .checkmark {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            border:1px solid #dadce0;
            background-color: #fff;
            border-radius: 4px;
            margin-right: 5px;
            vertical-align: middle;    border-radius: 20px;
          }
          .custom-checkbox input[type="checkbox"]:checked + .checkMarkWrapper .checkmark {
            background-color: #f0c23a;
            border: 1px solid #f0c23a;
          }
          .custom-checkbox .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
          .custom-checkbox input[type="checkbox"]:checked  + .checkMarkWrapper .checkmark:after {
            display: block;
          }
          .custom-checkbox .checkmark:after {
            left: 7px;
            top: 3px;
            width: 6px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
          }
          .radiobuttonSec label {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border: 1px solid #dadce0;
            border-radius: .25rem;
            height: 100%;
        }
        .buttons-group-set button.buttonCt{
          padding: 10.5px 0;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-family: montserrat;
          display: inline-block;
          text-align: center;
          width: 100%;
          background-color: #f0c23a;
          line-height: 1;
          border:0px;
          color: #2d2e2f;
          font-weight: 500;
        }
        .buttons-group-set button.reset-button{
          background:#d2d2d2;
        }
        .search-flex.buttons-group-set{
          justify-content: space-between;
        }
        .wrapperTo {
          display: flex;
          align-items: center;
      }
      .wrapperGpsInner {
        display: flex;
        align-items: center;
      }
      .generalText{
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          color: #b1b0b0;
          text-transform: none;
          letter-spacing: -0.02em;
          margin-bottom:5px;
      }
      .generalText strong{
          color: #222;
          font-size: 12px;
      }
      .search-flex.optionTwo{ margin-top:1rem;}
      .wrapperGPS .userLocationWrapper{
          padding: .375rem .8rem .375rem .55rem;
          min-height: 44px;
      }
      .checkMarkWrapper {
          min-width: 36px;
      }
      .userLocationWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      .textShowed{ font-size:12px}
      .noFlexDiv{ display:block;}
      .rowDivWrapper{
        display: flex;
        width: 100%;    justify-content: space-between;

      }
      .rowDivWrapper > div {
        flex: 1;
    }
    .rowDivWrapper > div:only-child {
        flex: 0 0 100%;
    }    
    .rowDivWrapper > div:not(:only-child) {
        flex: 0 0 50%;
    }
    .rowDivWrapper .search-flex .input-group.select-option{
      max-width:100%;
    }
    .location-search .col-12{ width:100%;    max-width: 100%;}
    .custom-checkbox input[type="checkbox"]:checked + .checkMarkWrapper + .userLocationWrapper {
        border-color: #f0c23a99;
    }
    .rowDivWrapper .search-flex.optionThree .select-option{
          padding-left: 0;
        margin-right: 15px;
        max-width: 94.5% !important;
    }
    .rowDivWrapper .addIconforBlance {
        position: relative;
        padding-left: 44px;
    }

    .iconForBalnced {
      position: absolute;
      width: 30px;
      height: 30px;
      background-size: cover;
      left: 3px;
      top: 10px;
      background-position: center;
  }


      @media (max-width: 1024px) {
      .hideOnSmallDevice{ display:none;}

      .wrapperGPS .custom-checkbox{
        width: 100%;
      }

    }
    @media (max-width: 767px) {
    .location-search .search-by-name{        padding-right: 8px !important;}
    .custom-checkbox{
        font-size: 11px;
    }
    .radiobuttonSec label, .location-search input[type="text"], .location-search select {
        min-height:44px;
    }
    .hiddeMobile{ display:none}
    .textShowed {
        font-size: 11px;
    } 
    .optionOne .generalText{
        max-width:100%;
    }
    .location-search input[type="text"], .location-search select,.looksLikeBrdr .userLocationWrapper{
        min-height: 36px;        max-height: 36px;
    }
    .search-flex.optionTwo {
        margin-top: 0.2rem;
    }
    .checkMarkWrapper {
        min-width: 30px;
    }
    .wrapperGPS .userLocationWrapper{
        padding: .375rem .9rem .375rem .75rem;
    }    
    .iconForBalnced{
      top: 3px;
    }
    }
    @media (min-width: 600px) {
      input, select {
        flex: 1;
      }
      button {
        flex: 0 0 auto;
      }
    }
    @media (max-width: 420px) {
      .location-search input[type="text"], .location-search select{ font-size:11px}
      .custom-checkbox{ font-size:10px; font-weight:500;}
    }
        `}</style>
      </div>
    </>
  );
}