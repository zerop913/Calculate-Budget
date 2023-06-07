function closeNotification() {
  const overlay = document.getElementById("notificationOverlay");
  const notification = document.getElementById("notification");

  notification.classList.remove("active");
  setTimeout(function () {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, 300);
  setTimeout(function () {
    overlay.classList.remove("active");
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    notification.classList.remove("active");
  }, 500);
}
