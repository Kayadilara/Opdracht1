import { useState } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import Detail from './Components/Detail';
import Followers from './Components/Followers';

const SearchBar = ( { onSearchClick, onResetClick }) => {
  const [query, setQuery] = useState('');
  const handleChange = (data) => {
    setQuery(data.target.value);
  }

  const resetSearchBar = () => {
    setQuery('');
    onResetClick();
  }

  return (
    <div className='searchbar'>
      <div className='row align-items-end'>
        <div className='col-md-10'>
          <Input 
            name = 'search'
            label = 'Zoeken op GitHub'
            onChange = {handleChange}
            value = {query}
          />
        </div>
        <div className='col-md-2'>
          <Button 
            children = 'Search'
            onClick = {() => onSearchClick(query)}
          />
          <Button 
            children = 'Reset'
            color = 'danger'
            onClick = {() => resetSearchBar()}
          />
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  const [activeUser, setActiveUser] = useState();

  return (
    <>
      <SearchBar onSearchClick={(query) => setActiveUser(query)} onResetClick={() => setActiveUser(null)}/>
      {
        activeUser ? [
          <Detail query = { activeUser }/>,
          <Followers query = { activeUser } /> 
        ] : null
  }
    </>
  )
}

export default Index;
