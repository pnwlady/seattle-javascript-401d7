var baseUrl = require('../../config').baseUrl;

module.exports = function(app) {
  app.factory('cfAuth', ['$http', '$q', function($http, $q) {
    // AUTH_EXP: explain what each of these functions are accomplishing and
    // what data we're storing in this service
    // this factory runs tasks for the token. remoteToken, reomves the token by changing token username and http.default.header values to null, and clears it from local storage, this will prevent future request from using the saved token; saveToken, saves the token by setting default http header to send saved token in each future request, it also saves token to local storage, and ends by returning the token property to the cfAuth object; getToken checks if there is a token in local stored and if not saves a token to local storage, and return it to the cfAuth object; getUsername sets up a promise that will check if the username matches the current user (in authController) and makes sure there is a token, rejecting the promise and sending an error if there is no token. 
    return {
      removeToken: function() {
        this.token = null;
        this.username = null;
        $http.defaults.headers.common.token = null;
        window.localStorage.token = '';
      },
      saveToken: function(token) {
        this.token = token;
        $http.defaults.headers.common.token = token;
        window.localStorage.token = token;
        return token;
      },
      getToken: function() {
        this.token || this.saveToken(window.localStorage.token);
        return this.token;
      },
      getUsername: function() {
        return $q(function(resolve, reject) {
          if (this.username) return resolve(this.username);
          if (!this.getToken()) return reject(new Error('no authtoken'));

          $http.get(baseUrl + '/api/profile')
            .then((res) => {
              this.username = res.data.username;
              resolve(res.data.username);
            }, reject);
        }.bind(this));
      }
    }
  }]);
};
