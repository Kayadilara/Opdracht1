const GitHubAuth = () => {
    const USERNAME =  '';
    const TOKEN = '';
    const auth = `${USERNAME}:${TOKEN}`
  
    return 'Basic ' + btoa(auth);
  }
  
  export default GitHubAuth;