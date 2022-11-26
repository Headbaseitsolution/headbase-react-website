import React from "react";
const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <select onChange={handleChange} defaultValue="role" name={name}>
        <option value="role" disabled>
          Choose Role
        </option>
        <option value="frontEnd" className="py-1">
          Front End
        </option>
        <option value="backEnd" className="py-1">
          Back End
        </option>
        <option value="qa" className="py-1">
          QA
        </option>
      </select>
    </div>
  );
};

export default SelectField;
