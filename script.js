const questions = [
    { q: "hol beszéltünk először?", img: "https://i.imgur.com/z2TKPgJ.jpeg", options: ["Suliban", "Tinderen", "Yubon", "Utcán"], a: "Yubon" },
    { q: "az első randink... volt?", img: "https://i.imgur.com/7amnDNk.jpeg", options: ["KFC-ben", "Kávézóban", "Tropicariumban", "Városligetben"], a: "KFC-ben" },
    { q: "mikor beszéltünk először?", img: "https://i.imgur.com/3fD71Gb.jpeg", options: ["2022. szeptember", "2022. december", "2022. október", "2022. november"], a: "2022. október" },
    { q: "melyik napon jöttünk össze 2022-ben?", img: "https://i.imgur.com/zmykoXa.jpeg", options: ["December 7.", "December 10.", "December 11.", "December 8."], a: "December 10." },
    { q: "onnantól számitva, hogy összejöttünk, hány napja vagyunk ma együtt?", img: "https://i.imgur.com/9138jr8.jpeg", options: ["1162", "1057", "1203", "1095"], a: "1162" },
    { q: "mi a kedvenc becenevünk egymásra, meg kb mindenkire?", img: "https://i.imgur.com/Xv2dzEa.jpeg", options: ["babi", "freak", "bab", "giliszta"], a: "bab" },
    { q: "melyiket NEM néztük együtt?", img: "https://i.imgur.com/4dwDwCD.jpeg", options: ["Gossip Girl", "Vámpirnaplók", "Mamma Mia", "Bridgerton"], a: "Mamma Mia" },
    { q: "hány évesek voltunk ezen a képen? (te-én)", img: "https://i.imgur.com/EORNJ6s.jpeg", options: ["16-16", "16-17", "17-17", "15-16"], a: "15-16" },
    { q: "melyik plázában készült ez a kép?", img: "https://i.imgur.com/J3oXtKP.jpeg", options: ["Allee", "Corvin", "Westend", "Aréna"], a: "Allee" },
    { q: "hol voltunk először együtt nyaralni?", img: "https://i.imgur.com/Q25HsfA.png", options: ["Balaton", "Angyali", "Thessaloniki", "Szigetbecse"], a: "Angyali" },
    { q: "mit csináltunk a bikás parkban ezen a napon?", img: "https://i.imgur.com/WOyoKMa.jpeg", options: ["festettünk és zabáltunk", "másokkal lógtunk", "rajzoltunk és zabáltunk", "freakeltünk"], a: "rajzoltunk és zabáltunk" },
    { q: "hová tartottunk, mikor ezt a képet lőttük?", img: "https://i.imgur.com/Fxfm8Sk.jpeg", options: ["Kfcbe", "Burger Kingbe", "Mekibe", "Ikeába"], a: "Ikeába" },
    { q: "hová látogattunk el, mikor a sváb vorsilvesterre mentünk?", img: "https://i.imgur.com/okYUvm9.jpeg", options: ["Diósförgepatony", "Karakószörcsök", "Görcsönydoboka", "Markotabödöge"], a: "Görcsönydoboka" },
    { q: "mikori ez a kép?", img: "https://i.imgur.com/0cI86wk.jpeg", options: ["2022->2023 szilveszter", "2023 Luca hb", "2023->2024 szilveszter", "bab"], a: "2023->2024 szilveszter" },
    { q: "ki csinálta rólunk ezt a cute képet?", img: "https://i.imgur.com/7wdcPgz.jpeg", options: ["Helga", "Mira", "Gege", "Szutter Olivér"], a: "Mira" },
    { q: "hol készült ez a kép?", img: "https://i.imgur.com/nYuJ8Hy.jpeg", options: ["Egy nyaraláson", "Hazafele Thessalonikiből", "Odafele Thessalonikibe", "Odafele Otrantoba"], a: "Hazafele Thessalonikiből" },
    { q: "2025ös reunionünk után - hová mentünk ezen a napon datelni?", img: "https://i.imgur.com/CJ7j0nt.jpeg", options: ["Smart Kitchenbe", "Padthaiba", "Starbucksba", "California Caféba"], a: "Starbucksba" },
    { q: "második külföldi trip - hogy hivják a spotot, ahol készült a kép?", img: "https://i.imgur.com/JYCHGDm.jpeg", options: ["Baia Imperia", "Grotta dell'Eremita", "Grotta Sfondata", "Baia dell'Orte"], a: "Grotta dell'Eremita" },
    { q: "egyik balatoni nyaralásunk - na de melyik?", img: "https://i.imgur.com/7Lpaj0g.jpeg", options: ["Balatonlelle", "Balatonudvari", "Siófok", "Balatonfüred"], a: "Siófok" },
    { q: "kifogytam a sweaty kérdésekből, inkább felteszek egy easyt - mennyire vagyunk szexik együtt?", img: "https://i.imgur.com/lUSHHXQ.jpeg", options: ["10/∞", "10/∞", "10/∞", "10/∞"], a: "10/∞" },
];

let currentQuestionIndex = 0;
const grid = document.getElementById('mosaicGrid');
const modal = document.getElementById('quiz-modal');

function showQuestion() {
    const qData = questions[currentQuestionIndex];
    document.getElementById('questionText').innerText = qData.q;

    const imgElement = document.getElementById('question-pic');
    if (qData.img) {
        imgElement.src = qData.img;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }

    const container = document.getElementById('optionsContainer');
    container.innerHTML = ""; // Régi gombok törlése

    qData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'opt-btn';
        btn.onclick = () => {
            if (opt === qData.a) {
                alert("helyes! ❤️");
                const allTiles = document.querySelectorAll('.tile');
                allTiles[currentQuestionIndex].classList.add('revealed');
                closeModal();
            } else {
                alert("no :(");
            }
        };
        container.appendChild(btn);
    });
}

// Mozaik generálása
questions.forEach((item, index) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerText = index + 1;

    // Speciális szín a 6-os és 7-es kockának
    // Az index 0-tól indul, tehát az 5-ös index a 6. kocka, a 6-os pedig a 7.
    if (index === 5 || index === 6) {
        tile.classList.add('special-tile');
    }

    tile.onclick = () => {
        currentQuestionIndex = index;
        modal.classList.add('active');
        modal.classList.remove('hidden');
        showQuestion();
    };

    grid.appendChild(tile);
});

function closeModal() {
    modal.classList.remove('active');
    modal.classList.add('hidden');
}

function openFinalSecret() {
    const userCode = prompt("találd ki a kódot a kérdések alatt rejlő kép felhasználásával (tipp: balról jobbra haladj, és a kód amúgy 5 számjegyet tartalmaz!");

    // A TE egyedi kódod a screenshotod alapján
    if (userCode === "30196") {
        document.body.innerHTML = `
            <div class="victory-screen">
                <h1>gratulálok!! </h1>
                <p>megcsináltad a küldetést, itt a jutalmad:</p>
                <h2 class="main-title">válassz egyet az alábbi programok közül:</h2>
                
                <div class="reward-columns">
                    <div class="column">
                        <div class="reward-card">
                            <h3>🍷 Elegáns vacsora 🍷</h3>
                            <p>egy romantikus este egy általad választott étteremben.</p>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="reward-card">
                            <h3>🎬 Moziest 🎬</h3>
                            <p>mozizás egy szabadon választott filmmel és sok popcornnal/nachossal.</p>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="reward-card">
                            <h3>🏊 Fürdőzés 🏊</h3>
                            <p>pihenés és feltöltődés a pesterzsébeti sósfürdőben.</p>
                        </div>
                    </div>
                </div>

                <div class="final-message">
                    <p>természetesen mindent én állok 💘</p>
                </div>

                <button onclick="location.reload()" class="back-btn">vissza a főoldalra</button>
            </div>
        `;
    } else {
        alert("hibás kód, gondold át újra");
    }
}

// Elindítjuk a mozgást
document.getElementById('secret-heart').classList.add('floating');

function openSecretQuestion() {
    const heart = document.getElementById('secret-heart');
    heart.style.animationPlayState = 'paused';

    const answer = prompt("megtaláltad a rejtett kérdést:) - meddig leszünk együtt?");

    // Ellenőrizzük az összes variációt kisbetűsre alakítva
    if (answer && (answer.toLowerCase() === "örökre" || answer.toLowerCase() === "örökké")) {
        alert("igy van!!! ❤️ a kód utolsó számjegye: 6");
        heart.style.display = 'none';
    } else {
        alert("ez nem volt elég meggyőző... próbáld újra!");
        heart.style.animationPlayState = 'running';
    }
}