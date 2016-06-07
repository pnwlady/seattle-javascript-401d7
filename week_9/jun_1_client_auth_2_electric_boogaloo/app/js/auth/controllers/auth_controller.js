module.exports = function(app) {
  app.controller('AuthController', ['cfAuth', 'cfHandleError',  '$location', function(auth, handleError, $location) {
    this.username = '';
    this.errors = [];
    this.getUsername = function() {
      // AUTH_EXP: What happens when this function is called?
      // getUsername function in the AuthController, runs when the promise in auth_service, i.e. when there is an instance of this.username, it will check to see if the currentUser matches the username (in that context), if not it will send an error that it could not get username. If the username does match the currentUser, then it will bind to the this instance of AuthController, and the promise will resolve.
      auth.getUsername()
        .then((currentUser) => {
          this.username = currentUser;
        }, handleError(this.errors, 'could not get username'));
    }.bind(this);

    this.logout = function() {
      auth.removeToken();
      this.username = '';
      $location.path('/signin');
    }.bind(this);
  }]);
};
