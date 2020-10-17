import React from 'react';
import './App.css';
import coverPhoto from './images/beachVibes1.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import { LocalGuide, CreateGuide } from './components/guides';
import Header from './Header';

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <div className="App">
      <Header
        isAuthenticated={isAuthenticated}
        loginWithRedirect={loginWithRedirect}
        user={user}
        logout={logout}
      />
      <header className="App-header">
        <div className="header-text">Travel Like A Local.</div>
        <div className="sub-text">Curated recommendations for exceptional experiences.</div>
        <div className="photo"><img alt=""  className="cover-photo" src={coverPhoto} /></div>
      </header>
      <LocalGuide />
      <CreateGuide />
    </div>
  );
}

export default App;
