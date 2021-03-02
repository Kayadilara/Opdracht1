import GitHubFollowers from '../Hooks/GithubFollowers';
import Card from './Card';
import Alert from './Alert';

const Followers = ( { query } ) => {
  const { data, error, isLoading } = GitHubFollowers(query);

  return (
    <div className='main'>
      {
        error && (
          <Alert 
            alert = 'danger'
            message = { error }
          />
        )
      }
      {
        isLoading && (
          <Alert 
            alert = 'info'
            message = 'Loading...'
          />
        )
      }
      {
        data && (
          <>
            <div>
              <h2>Followers</h2>
            </div>
            <div className='row mx-auto'>
            {
              data.map((follower) => (
                <Card 
                data = { follower }
              />
              ))
            }
            </div>

          </>
        )
      }

    </div>

  )
}

export default Followers;