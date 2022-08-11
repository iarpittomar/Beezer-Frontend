import React from 'react';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { useToast } from '@chakra-ui/toast';
import { getToken, removeToken, setTokenToLocalStorage } from '../utils/token';
import { useNavigate } from 'react-router';

const AuthContext = React.createContext(null);

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

const AuthProvider = ({ ...props }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [token, setToken] = React.useState(getToken() || '');

  React.useEffect(() => {
    if (token) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  const login = (email, password) => {
    firebase
      ?.auth()
      ?.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        toast({
          title: '',
          description: 'Your account has been created successfully.',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
        setIsAuthenticated(true);
        navigate('/dashboard');
      })
      .catch((error) => {
        toast({
          title: '',
          description: error.message,
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        toast({
          title: '',
          description: 'Your account has been created successfully.',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
        setIsAuthenticated(true);
        navigate('/dashboard');
      })
      .catch((error) => {
        toast({
          title: '',
          description: error.message,
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const signUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        toast({
          title: '',
          description: 'Your account has been created successfully.',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
        navigate('/login');
      })
      .catch((error) => {
        toast({
          title: '',
          description: error?.message,
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  React.useEffect(() => {
    firebase?.auth()?.onAuthStateChanged((userCredentials) => {
      userCredentials
        ?.getIdToken()
        .then((token) => {
          setToken(token);
          setTokenToLocalStorage('token', token);
          console.log(token);
          console.log('in authState change');
        })
        .catch((error) => {});
    });
  }, []);

  const logout = () => {
    firebase
      ?.auth()
      ?.signOut()
      .then(() => {
        setToken('');
        removeToken();
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        loginWithGoogle,
        signUp,
        token,
        isAuthenticated,
      }}
      {...props}
    ></AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
