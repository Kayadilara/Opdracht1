import { useState, useEffect } from 'react';
import GitHubAuth from './GithubAuth';

const GitHubFollowers = (query) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const GITHUB_API_URL = 'https://api.github.com/users/';

  useEffect(() => {
    setData(null);
    setError(null);

    let isCurrent =  true;

    fetch(`${GITHUB_API_URL}${query}/followers`, 
      {
        headers: {
          'Authorization': GitHubAuth(),
        }
      })
      .then((json) => json.json())
      .then((data) => isCurrent && !data.message && data.length !== 0 ? setData(data) : setError('No followers found!'))
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

export default GitHubFollowers;