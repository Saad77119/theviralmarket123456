document.addEventListener(
  "deviceready",
  function () {
    //Remove this method to stop OneSignal Debugging
    window.plugins.OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });

    var notificationOpenedCallback = function (jsonData) {
      console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal.startInit("e1cdcacc-2061-4353-9525-6ae105c5112d")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(
        window.plugins.OneSignal.OSInFocusDisplayOption.Notification
      )
      .endInit();

    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(
      function (accepted) {
        console.log("User accepted notifications: " + accepted);
      }
    );
  },
  false
);
