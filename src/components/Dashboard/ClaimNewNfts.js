import React, {useEffect, useRef, useState} from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import axios from 'axios'
import Swal from 'sweetalert2';
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";
const apiKey ='AIzaSyC9LN9PnRFUQgfYCF-MxzvvJ914d7aS3JI';
// import 
// console.log(apiKey); 

const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: 1, location: '',lan:'',lat:'' }]);

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('nfts',JSON.stringify(fields));
    axios.post('/api/nft', formData).then(res => {
      if (res.data.status === 200) {
        console.log(res.data.message)
        setFields([{ id: 1, location: '',lan:'',lat:'' }])
        Swal.fire('success',res.data.message,'success')
      }else {
        Swal.fire('error','Something went Wrong. Please try Again','success')
      }
    }).catch(err => err)
  }



  const handleRemoveField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  const handleLocationChange = async (id, location) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, location } : field
    );
    setFields(updatedFields);
  };

  const handleLocationSelect = async (id, selectedLocation) => {

    const results = await geocodeByAddress(selectedLocation);
    const latLng = await getLatLng(results[0]);

    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, location:selectedLocation,lan:latLng.lng,lat:latLng.lat } : field
    );
    updatedFields.push({id: fields.length +1, location: '',lan:'',lat:''})
    setFields(updatedFields);
    console.log(updatedFields)


    // console.log('Location:', selectedLocation);
    console.log('LatLng:', latLng);
  };

  return (
    
<>
      <div className="content-eas-nft-wrapper">
        <h3 className="page-title-item">Claim New Address NFTs</h3>
        <p>
          You can select up to five addresses below to create an Address NFT
          bundle.
        </p>
        <div className="claim-content-wrapper">
          
        <div>
      {fields.map((field) => (
        <div key={field.id}>
          <PlacesAutocomplete
            value={field.location}
            onChange={(location) => handleLocationChange(field.id, location)}
            onSelect={(selectedLocation) => handleLocationSelect(field.id, selectedLocation)}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: 'Enter a location...' })}
                />
                <div>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, { style: { backgroundColor: '#fff' } })}
                    >
                      {suggestion.description}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <button type="button" onClick={() => handleRemoveField(field.id)}>
            Remove Field
          </button>
        </div>
      ))}
    </div>
          
          
          <button
            className="save-change-btn custom-btn"
            onClick={submitForm}
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DynamicForm;
