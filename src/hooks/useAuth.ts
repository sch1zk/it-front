"use client"

import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/auth/me', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data?.email ? true : false))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return isAuthenticated;
}

export default useAuth;