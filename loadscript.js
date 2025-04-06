const isGithubPages = location.hostname.includes("github.io");

let prefix = "https://voidzinn.github.io/Linguagens-de-programacao/";

if (!isGithubPages) {
    // Se está rodando localmente, calcula o prefixo com base na profundidade do path
    const depth = location.pathname.split("/").filter(s => s !== "").length - 1;
    prefix = "../".repeat(depth);
}

fetch(prefix + 'navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;
        
        const homeLink = document.getElementById("homeLink");
        if (homeLink && !isGithubPages) {
            homeLink.href = prefix + "index.html";
        }});

fetch(prefix + "footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);