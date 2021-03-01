const Alert = ( { alert = 'primary', message = 'Loading...'}) => {
    return (
      <div className={`alert alert-${alert} role=alert`}>
        { message }
      </div>
    )
  }
  
  export default Alert;