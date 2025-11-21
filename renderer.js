document.getElementById("search").addEventListener("input", async function () {
    const q = this.value.toLowerCase();

    const response = await fetch("data.json");
    const data = await response.json();

    const filtered = data.filter(item => 
        item.name.toLowerCase().includes(q)
    );

    const results = document.getElementById("results");
    results.innerHTML = "";

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = item.name;
        results.appendChild(div);
    });
});
