document.getElementById("callApi").addEventListener("click", () => {
    const traveler = {
      name: "Asher",
      countries: ["Japan", "France", "Brazil", "Canada", "Germany"]
    };
  
    fetch("/ex2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(traveler)
    })
      .then(res => res.text())
      .then(msg => {
        document.getElementById("response").textContent = msg;
      })
      .catch(err => {
        console.error(err);
      });
  });
  