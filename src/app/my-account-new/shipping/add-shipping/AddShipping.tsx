"use client"
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import Input from '@/ui/common/Input';
import { COLORS } from '@/utils';
import Autocomplete from "react-google-autocomplete";

interface FormData {
  shipping_first_name?: string;
  shipping_last_name?: string;
  shipping_address_1?: string;
  shipping_address_2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_postcode?: string;
  shipping_country?: string;
  shipping_company_name?: string;
}

interface Countries { code: string, name: string }

const AddShipping: React.FC = () => {
  const { userData, setUser } = useUser();
  const { makeApiCall, loading } = useApi();

  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [states, setStates] = useState<Countries[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [shippingData, setShippingData] = useState<FormData>({
    shipping_first_name: '',
    shipping_last_name: '',
    shipping_address_1: '',
    shipping_address_2: '',
    shipping_city: '',
    shipping_state: '',
    shipping_postcode: '',
    shipping_company_name: '',
    shipping_country: 'US'
  });
  const handleSubmit = async () => {
    const { shipping_first_name, shipping_last_name, shipping_address_1, shipping_address_2, shipping_city, shipping_company_name, shipping_state, shipping_postcode, shipping_country } = shippingData as Required<FormData>;
    const newEmptyFields: string[] = [];

    if (!shipping_first_name.trim()) newEmptyFields.push('First Name');
    if (!shipping_last_name.trim()) newEmptyFields.push('Last Name');
    if (!shipping_address_1.trim()) newEmptyFields.push('Shipping address');
    if (!shipping_city.trim()) newEmptyFields.push('City');
    // if (!shipping_state.trim()) newEmptyFields.push('State');
    // if (!shipping_country.trim()) newEmptyFields.push('Country');
    if (!shipping_postcode.trim()) newEmptyFields.push('Zip Code');
    if (newEmptyFields.length > 0) {
      alert(`Please complete the following fields: ${newEmptyFields.join(', ')}`);
      setEmptyFields(newEmptyFields);
      return;
    }

    try {
      const data = {
        user_id: userData.id,
        address_id: 0,
        shipping_last_name: shipping_last_name,
        shipping_first_name: shipping_first_name,
        shipping_address_1: shipping_address_1,
        shipping_address_2: shipping_address_2,
        shipping_city: shipping_city,
        shipping_state: shipping_state,
        shipping_postcode: shipping_postcode,
        shipping_country: shipping_country,
        shipping_company_name: shipping_company_name
      };
      const response = await makeApiCall(`auth/update-shipping-address`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        setShippingData({
          shipping_first_name: '',
          shipping_last_name: '',
          shipping_address_1: '',
          shipping_address_2: '',
          shipping_city: '',
          shipping_state: '',
          shipping_postcode: '',
          shipping_company_name: '',
          shipping_country: ''
        });
      } else {
        throw new Error('Failed to update customer data');
      }
    } catch (error) {
      console.error('Error during update:', error);
      alert(`Something went wrong while updating user: ${error.toString()}`);
    }
  };

  const handleChange = (field: string | undefined, value: any) => {
    if (typeof field === 'string') {
      if (field === 'shipping_country') {
        const selectedCountry = countries.find(country => country.code === value);
        if (selectedCountry) {
          setShippingData(prevSocial => ({
            ...prevSocial,
            [field]: selectedCountry.code,
          }));
        }
      } if (field === 'shipping_state') {
        const selectedState = states.find(state => state.code === value);
        if (selectedState) {
          setShippingData(prevSocial => ({
            ...prevSocial,
            [field]: selectedState.code,
          }));
        }
      } else {
        setShippingData(prevSocial => ({
          ...prevSocial,
          [field]: value,
        }));
      }
    }
  };


  const getCountriesData = async () => {
    try {
      const response = await makeApiCall(`order/shipping-countries-states`, 'GET');
      if (response.statusCode === 200 && response.success) {
        const countriesArray: any = Object.entries(response.data.country).map(([code, name]) => ({ code, name }));
        const data = [
          {
            code: 'null', name: 'Open this select menu'
          },
          ...countriesArray
        ]
        setCountries(data)
      } else {
        throw new Error('Failed to update customer data');
      }
    } catch (error) {
      console.error('Error during update:', error);
      alert(`Something went wrong while updating user: ${error.toString()}`);
    }
  };

  const getStatesData = async (state) => {
    try {
      const response = await makeApiCall(`order/shipping-countries-states?country=${state}`, 'GET');
      if (response.statusCode === 200 && response.success) {
        if (response.data.states === false) {
          setStates([])
          return
        } else {
          const countriesArray: any = Object.entries(response.data.states).map(([code, name]) => ({ code, name }));
          const data = [
            {
              code: 'null', name: 'Open this select menu'
            },
            ...countriesArray
          ]
          setStates(data)
        }
      } else {
        throw new Error('Failed to update customer data');
      }
    } catch (error) {
      console.error('Error during update:', error);
      alert(`Something went wrong while updating user: ${error.toString()}`);
    }
  };

  useEffect(() => { getCountriesData() }, [])
  return (
    <div className="pageStainConcealer">
      <Heading
        heading="add Shipping"
        subHeading="Add your shipping address."
        border={true}
        lineHeight={false}
      />
      <Input
        value={shippingData.shipping_first_name}
        title={'First Name'}
        onInputChange={handleChange}
        name="shipping_first_name"
        error={emptyFields}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <Input
        value={shippingData.shipping_last_name}
        title={'Last Name'}
        onInputChange={handleChange}
        name="shipping_last_name"
        error={emptyFields}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <Input
        value={shippingData.shipping_company_name}
        title={'Company Name (optional)'}
        onInputChange={handleChange}
        name="shipping_company_name"
        error={emptyFields}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <div style={{ display: 'flex', gap: '10px', paddingBottom: '5px' }}>
        <span style={{ color: COLORS.gray }}>
          Street Address:</span>
      </div>
      <Autocomplete
        apiKey={'AIzaSyBbxE-oS52upTGTzOq2r1aCnG9QkqafsVI'}
        onPlaceSelected={(place) => handleChange('shipping_address_1', place.formatted_address)
        }
        style={{
          paddingRight: '15px',
          padding: '15px',
          height: '50px',
          borderWidth: '1px',
          width: '100%',
          borderRadius: '10px',
          marginBottom: 20,
        }}
      />
      <Input
        value={shippingData.shipping_address_2}
        placeholder='Apartment, suite, unit, etc. (optional)'
        onInputChange={handleChange}
        name="shipping_address_2"
        error={emptyFields}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <div style={{ display: 'flex', gap: '10px', paddingBottom: '5px' }}>
        <span style={{ color: COLORS.gray }}>
          Country:</span>
      </div>
      <select style={{
        paddingRight: '15px',
        padding: '15px',
        height: '50px',
        borderWidth: '1px',
        width: '100%',
        borderRadius: '10px',
        marginBottom: 20,
      }}
        aria-label="Default select example"
        value={shippingData.shipping_country}
        onChange={(e) => {
          handleChange('shipping_country', e.target.value);
          getStatesData(e.target.value)
        }}>
        {countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      {
        states.length > 0 &&
        <>
          <div style={{ display: 'flex', gap: '10px', paddingBottom: '5px' }}>
            <span style={{ color: COLORS.gray }}>
              State:</span>
          </div>
          <select style={{
            paddingRight: '15px',
            padding: '15px',
            height: '50px',
            borderWidth: '1px',
            width: '100%',
            borderRadius: '10px',
            marginBottom: 20,
          }}
            aria-label="Default select example"
            value={shippingData.shipping_state}
            onChange={(e) => handleChange('shipping_state', e.target.value)}>
            {states.map(state => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </>
      }
      <Input
        value={shippingData.shipping_city}
        title={'City'}
        onInputChange={handleChange}
        name="shipping_city"
        error={emptyFields}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <Input
        value={shippingData.shipping_postcode}
        title={'Zip Code'}
        onInputChange={handleChange}
        name="shipping_postcode"
        error={emptyFields}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <Button title={'submit'} textStyle={{ width: '100%', }} onClick={() => handleSubmit()} />
    </div >
  );
};

export default AddShipping;
