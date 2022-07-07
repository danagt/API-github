btn = ""
btn.onclick = () => {
    fetch("https://api.github.com/users/" + busqueda.value)
        .then(response => response.json())
        .then(data => {
            resultado.textContent = "";
            resultado.textContent = `Cuenta de ${data.name}`;
            const img = document.createElement("img");
            img.src = data.avatar_url;
            resultado.appendChild(img);

    })
}


// fetch("https://api.github.com/users/bdebon") // usuarios para probar: nedfri, bdebon 
//     .then(response => response.json())
//     .then(data => console.table(data))