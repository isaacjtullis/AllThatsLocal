import React from "react";
function Header(props) {
  const { isAuthenticated, user, logout, loginWithRedirect } = props;
  return(
    <div stye="display: flex; flex-direction: column; align-items: stretch; align-content: stretch; height: 100%">
      <div>
        <div>
          <div className="navbar fixed-navbar">
            <ul className="logo"><li>City In A Day</li></ul>
            <ul className="right-nav">
              <li>Become a Guide</li>
              <li>
              {!isAuthenticated &&
                <button onClick={loginWithRedirect}>Log in</button>
              }
              {isAuthenticated &&
                <div>
                  Hello {user.name}{' '}
                  <button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log out
                  </button>
                </div>
              }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
