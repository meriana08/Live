// Empty constructor
function Live() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
Live.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'Live', 'show', [options]);
}

// Installation constructor that binds Live to window
Live.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.Live = new Live();
  return window.plugins.Live;
};
cordova.addConstructor(Live.install);
