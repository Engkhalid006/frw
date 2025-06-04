function fetchContent() {
  fetch('https://web29.faselhd1watch.one/movies')
    .then(response => response.text())
    .then(data => {
      // هنا تقدر تحلل البيانات وتضيفها للأقسام
      console.log('تم التحديث');
      showUpdateNotification('تم إضافة محتوى جديد!');
    })
    .catch(error => console.error('خطأ:', error));
}

setInterval(fetchContent, 30 * 60 * 1000); // كل ٣٠ دقيقة

function showUpdateNotification(message) {
  const notification = document.createElement("div");
  notification.className = "update-notification";
  notification.innerText = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
}
