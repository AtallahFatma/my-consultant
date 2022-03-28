import React, { useState } from 'react';
import { Button } from '../components';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { AUTH_TOKEN } from '../constants/constants';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../graphql/Mutation';

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  const [login, {error}] = useMutation(LOGIN_MUTATION, {
    variables: {
        email: formState.email,
        password: formState.password
    },
    onCompleted: ({ login }) => {
        localStorage.setItem(AUTH_TOKEN, login.token);
        navigate('/listOfUsers');
    }
    });

    const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password
    },
    onCompleted: ({ signup }) => {
        localStorage.setItem(AUTH_TOKEN, signup.token);
        navigate('/');
    }
    });
  return (
    <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      {error && <div>{error.message}</div>}
      <div className="flex mt3">
        <Button
            className="pointer mr2 button"
            onPress={formState.login ? login : signup}
            >
            {formState.login ? 'login' : 'create account'}
        </Button>
        <Button
          className="pointer button"
          onPress={() =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'Need to create an account?'
            : 'Already have an account?'}
        </Button>
      </div>
    </div>
  );
};

export default Login;