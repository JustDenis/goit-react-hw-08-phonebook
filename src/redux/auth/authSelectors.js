const isAuthenticated = state => state.auth.token;

const userName = state => state.auth.user.name;

const getAuthIsLoading = state => state.auth.loading;

const getUserInfo = state => state.auth.user;

export default { isAuthenticated, userName, getAuthIsLoading, getUserInfo };
