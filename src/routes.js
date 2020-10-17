import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/Home' /* webpackChunkName: "Home" */)),
    private: false,
    restricted: true,
  },
  {
    path: '/keypad',
    label: 'Keypad',
    exact: true,
    component: lazy(() => import('./views/Keypad' /* webpackChunkName: "Keypad" */)),
    private: true,
    restricted: false,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./views/Contacts' /* webpackChunkName: "Contacts" */)),
    private: true,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/Register' /* webpackChunkName: "Register" */)),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/LogIn' /* webpackChunkName: "LogIn" */)),
    private: false,
    restricted: true,
  },
  {
    path: '/profile',
    label: 'Profile',
    exact: true,
    component: lazy(() => import('./views/Profile' /* webpackChunkName: "Profile" */)),
    private: true,
    restricted: false,
  },
];
