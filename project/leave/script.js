document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // You can add your code here to handle form submission
    // For example, sending data to a server, showing a confirmation message, etc.

    // For demonstration, let's just log the form data to the console
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
});
