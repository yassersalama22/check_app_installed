function detectAndLaunchWhatsApp(callback) {
    var start = Date.now();
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'whatsapp://';
    document.body.appendChild(iframe);

    setTimeout(function() {
        var elapsed = Date.now() - start;
        if (elapsed < 1500) {
            // WhatsApp is likely installed
            callback(true);
        } else {
            // WhatsApp is not installed
            callback(false);
        }
        document.body.removeChild(iframe);
    }, 1500); // Adjust the timeout duration as needed
}

// Example usage:
detectAndLaunchWhatsApp(function(isInstalled) {
    if (isInstalled) {
        console.log('WhatsApp is installed');
        // Optionally, you can redirect to WhatsApp or perform another action
    } else {
        console.log('WhatsApp is not installed');
        // Fallback action: redirect to the App Store or show a message
    }
});
