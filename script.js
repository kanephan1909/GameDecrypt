document.getElementById("submitBtn").addEventListener("click", handleSubmit);
document.getElementById("code").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleSubmit();  // Gọi hàm handleSubmit khi người dùng nhấn Enter
    }
});

function handleSubmit() {
    const codeInput = document.getElementById("code").value;
    const message = document.getElementById("message");
    const waitMessage = document.getElementById("waitMessage");
    const submitBtn = document.getElementById("submitBtn");

    if (codeInput === "3004") {
        // Chuyển hướng đến trang thành công
        window.location.href = "success.html"; // Trang chúc mừng
    } else {
        message.textContent = "Mã không đúng!";
        message.classList.remove("hidden");
        waitMessage.classList.remove("hidden");

        // Disable button and input for 15 seconds
        submitBtn.disabled = true;
        
        // Tạo đếm ngược 15 giây
        let countdown = 15;
        waitMessage.textContent = `Thử lại sau ${countdown} giây...`;

        const countdownInterval = setInterval(function() {
            countdown--;
            waitMessage.textContent = `Thử lại sau ${countdown} giây...`;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                submitBtn.disabled = false;
                document.getElementById("code").value = ""; // Reset input
                message.classList.add("hidden");
                waitMessage.classList.add("hidden");
            }
        }, 1000); // Đếm giây mỗi 1000ms (1s)
    }
}
