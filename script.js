

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
    alert("Button clicked! This is a separate script.");
});

function update() {
    let time = new Date()
    document.getElementById("time").innerText = time;
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      // Remove the active class from all links
      document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
  
      // Add the active class to the clicked link
      this.classList.add('active');
    });
  });
  

setInterval(update, 2000);
