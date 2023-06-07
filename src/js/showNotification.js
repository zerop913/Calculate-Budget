function showNotification(message) {
  const overlay = document.getElementById("notificationOverlay");
  const notification = document.getElementById("notification");
  const notificationText = document.getElementById("notificationText");

  notificationText.innerHTML = message;
  overlay.classList.add("active");
  setTimeout(function () {
    notification.classList.add("active");
  }, 10);
}
