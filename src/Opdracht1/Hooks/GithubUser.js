import { useState, useEffect } from 'react';
import GitHubAuth from './GithubAuth.js';

const GitHubUser = (query) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const GITHUB_API_URL = 'https://api.github.com/users/';

  useEffect(() => {
    setData(null);
    setError(null);

    let isCurrent =  true;

    fetch(`${GITHUB_API_URL}${query}`, 
      {
        headers: {
          'Authorization': GitHubAuth(),
        }
      })
      .then((json) => json.json())
      .then((data) => isCurrent && !data.message ? setData(data) : setError('User niet gevonden'))
      .catch((error) => isCurrent && setError(error.message));

    return () => (isCurrent = false);

  }, [query]);

  const isLoading = !data && !error;

  return {
    data, 
    error, 
    isLoading,
  }
}

export default GitHubUser;