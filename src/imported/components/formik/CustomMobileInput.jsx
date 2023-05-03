/* eslint-disable react/forbid-prop-types */
import { useField } from 'formik';
import PropType from 'prop-types';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const CustomMobileInput = (props) => {
  const [field, meta, helpers] = useField(props);
  const { label, placeholder, defaultValue } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleChange = (value, data) => {
    const mob = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      country: data.name,
      value
    };

    setValue(mob);
  };

  return (
    <div className="input-group">
      {touched && error ? (
        <span className="label-input label-error">{error?.value || error?.dialCode}</span>
      ) : (
        <label className="label-input fs-4 p-0 mb-2" htmlFor={field.name}>{label}</label>
      )}
      <PhoneInput
        name={field.name}
        country="us"
        inputClass=""
        style={{
          borderRadius: "8px",
          padding:"10px"
        }}
        inputExtraProps={{ required: true }}
        buttonStyle={{ borderRadius:"8px 0 0 8px" , padding:"10px"}}
        
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue.value}
      />
    </div>
  );
};

CustomMobileInput.defaultProps = {
  label: 'Mobile',
  placeholder: '09254461351'
};

CustomMobileInput.propTypes = {
  label: PropType.string,
  placeholder: PropType.string,
  defaultValue: PropType.object.isRequired
};

export default CustomMobileInput;
