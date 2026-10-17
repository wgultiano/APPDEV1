import { useEffect, useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

function isLoginRoute() {
  return window.location.hash === '#login';
}

export default function App() {
  const [showLogin, setShowLogin] = useState(isLoginRoute);

  useEffect(() => {
    const handleHashChange = () => setShowLogin(isLoginRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return showLogin ? <Login /> : <SignUp />;
}
