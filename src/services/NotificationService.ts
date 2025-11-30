

export const NotificationService = {
  // Check if browser supports notifications
  isSupported: (): boolean => {
    return 'Notification' in window;
  },

  // Request permission from user
  requestPermission: async (): Promise<NotificationPermission> => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
      return 'denied';
    }
    return await Notification.requestPermission();
  },

  // Check current permission status
  getPermission: (): NotificationPermission => {
    if (!('Notification' in window)) return 'denied';
    return Notification.permission;
  },

  // Send the actual notification
  sendNotification: (title: string, body: string) => {
    if (Notification.permission === 'granted') {
      const options: any = {
        body: body,
        icon: '/favicon.ico', // You can replace this with a specific app icon URL
        vibrate: [200, 100, 200],
        tag: 'spacetech-reminder',
        requireInteraction: true // Keeps notification on screen until user interacts
      };
      
      const notification = new Notification(title, options);
      
      notification.onclick = function() {
        window.focus();
        notification.close();
      };
    }
  }
};