import PushNotification from 'react-native-push-notification';
import {
    PushNotificationIOS
} from 'react-native';

const configure = () => {
    PushNotification.configure({

        onRegister: function (token) {
            //process token
            console.log('TOKEN:', token);
        },

        onNotification: function (notification) {
            // process the notification
            // required on iOS only
            console.log('NOTIFICATION:', notification);
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        popInitialNotification: true,
        requestPermissions: true,

    });
};
const localNotification = () => {
    PushNotification.localNotification({
        //alertBody: "hello",
        alertAction: "view",
        autoCancel: true,
        largeIcon: "ic_launcher",
        smallIcon: "ic_notification",
        bigText: "My big text that will be shown when notification is expanded",
        subText: "This is a subText",
        color: "green",
        vibrate: true,
        vibration: 300,
        title: "Notification Title",
        message: "Notification Message",
        playSound: true,
        reactsoundName: 'default',
       actions: '["Accept", "Reject"]',
    });
};




export {
    configure,
    localNotification,
};