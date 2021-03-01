const Input = ( { name, label, onChange, value }) => {
    return (
      <>
        <label htmlFor={name} className='form-label'>{label}</label>
        <input 
          name = {name}
          id = {name}
          value = {value}
          onChange = {onChange}
          className = 'form-control' 
        />
      </>
    )
  }
  
  export default Input;