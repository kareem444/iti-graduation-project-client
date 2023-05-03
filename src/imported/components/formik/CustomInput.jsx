/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';

const CustomInput = ({
  field, form: { touched, errors }, label, inputRef, ...props
}) => (
  <div className="form-group">
    {touched[field.name] && errors[field.name] ? (
      <span className="form-label fs-3 invalid-feedback">{errors[field.name]}</span>
    ) : (
      <label className="form-label fs-3 p-0 mb-2" htmlFor={field.name}>{label}</label>
    )}
    <input
      type="text"
      id={field.name}
      className={`form-control ${touched[field.name] && errors[field.name] && 'is-invalid'}`}
      style={{ borderRadius: "8px", textTransform: 'capitalize', height: "42px", fontSize: "16px" }}
      ref={inputRef}
      {...field}
      {...props}
    />
  </div>
);

CustomInput.defaultProps = {
  inputRef: undefined
};

export default CustomInput;
