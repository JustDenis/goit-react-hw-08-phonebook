import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublickRoute from '../PublickRoute/PublickRoute';
import { CSSTransition } from 'react-transition-group';
import Loader from '../Loader/Loader';

import routes from '../../routes';
import authSelectors from '../../redux/auth/authSelectors';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import authOperations from '../../redux/auth/authOperations';
import { connect } from 'react-redux';
import LoaderTransition from '../Loader/transitions/LoaderTransition.module.css';

class App extends Component {
  componentDidMount() {
    const { onGetCurrentUser} = this.props;

  onGetCurrentUser();
  }

  render() {
    const { isAuthenticated, isLoadingContacts, isLoadingAuth } = this.props;
    const isLoading = isLoadingContacts || isLoadingAuth ? true : false;
    return (
      <BrowserRouter>
        {isAuthenticated && !isLoadingAuth && <UserMenu />}
        <Layout>
          <Suspense fallback={<Loader/>}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublickRoute key={route.label} {...route} />
                ),
              )}
            </Switch>
          </Suspense>
          {isAuthenticated && <Navigation />}
          <CSSTransition
          in={isLoading}
          appear={true}
          classNames={LoaderTransition}
          timeout={150}
          unmountOnExit
        >
          <Loader />
        </CSSTransition>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  isLoadingContacts: contactsSelectors.getIsLoadingContacts(state),
  isLoadingAuth: authSelectors.getAuthIsLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
