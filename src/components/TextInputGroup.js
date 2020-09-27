import React from "react";
import PropTypes from "prop-types";

//destructure the props object for brevity in component
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className="form-control form-control-lg"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputGroup;
