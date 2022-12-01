import React from "react";
const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <select onChange={handleChange} defaultValue="option.value" name={name}>
        <option value="role" disabled>
          Choose Role
        </option>
        <option value="frontEnd">Front End</option>
        <option value="backEnd">Back End</option>
        <option value="qa">QA</option>
      </select>
    </div>
  );
};

export default SelectField;
