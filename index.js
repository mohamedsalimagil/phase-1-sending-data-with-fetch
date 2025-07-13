// Add your code here
function submitData(name, email) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ name, email }),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = `New user id: ${data.id}`;
      document.body.appendChild(p);
      return data;
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      p.style.color = "red";
      document.body.appendChild(p);
      return error;
    });
}
