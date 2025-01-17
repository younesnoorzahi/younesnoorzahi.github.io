document.getElementById('sendLocationButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            sendLocationToTelegram(latitude, longitude);
        }, function() {
            alert('خطا در دریافت لوکیشن.');
        });
    } else {
        alert('مرورگر شما از لوکیشن پشتیبانی نمی‌کند.');
    }
});

function sendLocationToTelegram(latitude, longitude) {
    const chatId = '7702824097';
    const token = '8125038847:AAExu1zmeZI3zp6nR58B8PHewb-waSrfFf0';
    const url = `https://api.telegram.org/bot${token}/sendLocation?chat_id=${chatId}&latitude=${latitude}&longitude=${longitude}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('لوکیشن با موفقیت ارسال شد!');
            } else {
                alert('خطا در ارسال لوکیشن.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('خطا در ارسال لوکیشن.');
        });
}
