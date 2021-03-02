const Card = ( { data } ) => {
    return (
      <div className='card col-md-3'>
      <img className='card-img-top' src={data.avatar_url}  alt={data.id}></img>
      <div className='card-body'>
        <h5 className='card-title'>{data.login}</h5>
        <p className='card-text'>ID number: {data.id}</p>
      </div>
    </div>
    )
  }
  
  export default Card;