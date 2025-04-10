document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    fetch("/ex1", {
      method: "POST",
      body: formData
    })
      .then(res => res.text())
      .then(msg => {
        document.getElementById("result").textContent = msg;
      })
      .catch(err => {
        console.error(err);
      });
  });
  