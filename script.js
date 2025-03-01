<script>
    // Function to set current date and time
    window.onload = function () {
        const today = new Date();

        // Format date as YYYY-MM-DD
        const formattedDate = today.toISOString().split('T')[0];
        document.getElementById("date").value = formattedDate;

        // Format time as HH:MM (24-hour format)
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        document.getElementById("time").value = `${hours}:${minutes}`;
    };
</script>
