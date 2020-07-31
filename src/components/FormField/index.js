import React from 'react'

function FormField({ label, value, onChange, type, name }) {
  return (
    <div>
      <label>{label}:</label>
      {type === 'textarea'?
      <textarea
        type='text'
        value={value}
        name={name}
        onChange={onChange}
      />
      :<input 
        type={type}
        name={name}
        value={value} 
        onChange={onChange}
      />
      }
      
    </div>
  );
}

export default FormField;