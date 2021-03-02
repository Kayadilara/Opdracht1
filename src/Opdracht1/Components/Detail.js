import GitHubUser from '../Hooks/GithubUser';
import Card from './Card';
import Alert from './Alert';

const Detail = ( { query } ) => {
  const { data, error, isLoading } = GitHubUser(query);

  return (
    <div className='container'>
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
              <h2>GitHub User</h2>
            </div>
            <Card 
              data = { data }
            />
          </>
        )
      }
    </div>
  )
}

export default Detail;