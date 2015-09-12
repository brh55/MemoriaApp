// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  name: 'Memoria',
  description: 'An interactive experience of all your important life events',
  author: 'Memoria Team',
  email: 'contact@example.com',
  website: 'http://example.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  // Android
  'android_ldpi': 'resources/icons/Icon-Small.png',
  'android_mdpi': 'resources/icons/Icon-Small-50.png',
  'android_hdpi': 'resources/icons/Icon-76@2x.png',
  'android_xhdpi': 'resources/icons/Icon@2x.png'
  // ... more screen sizes and platforms ...
});

App.launchScreens({
  // // Android
  // 'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  // 'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
  // 'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  // 'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  // 'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  // 'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  // 'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  // 'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });
