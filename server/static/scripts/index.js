const ping1 = document.getElementById("ping-s1");
const ping2 = document.getElementById("ping-s2");

const ping1Message = document.getElementById("ping-s1-message");
const ping2Message = document.getElementById("ping-s2-message");

ping1.addEventListener('click', () => {
    fetch("http://127.0.0.1:5001/ping")
        .then(response => response.json())
        .then(data => {
            ping1Message.textContent = data.message;
        })
        .catch(response => {
            ping1Message.textContent = "FAILED";
        });
});

ping2.addEventListener('click', () => {
    fetch("http://127.0.0.1:5002/ping")
        .then(response => response.json())
        .then(data => {
            ping2Message.textContent = data.message;
        })
        .catch(response => {
            ping2Message.textContent = "FAILED";
        });
});