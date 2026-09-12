/*==================================================
                VARIABLES
==================================================*/

// Glow del mouse
const mouseGlow = document.querySelector(".mouse-glow");
const cursorLight = document.querySelector(".cursor-light");

// Contenedor de corazones
const hearts = document.getElementById("hearts");

// Páginas
const pages = document.querySelectorAll(".page");

// Menú
const menuItems = document.querySelectorAll(".menu-item");
const sidebar = document.querySelector(".sidebar");
const app = document.querySelector(".app");

// Inicio
const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const unlockMessage = document.getElementById("unlockMessage");

// Audio
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

// Volumen de la música de fondo (40%).
if(music){

    music.volume = 0.40;

}

function updateMusicPlayer(){

    if(!music) return;

    const isPlaying = !music.paused;

    document.body.classList.toggle("music-playing", isPlaying);

    if(musicToggle){

        musicToggle.setAttribute("aria-label", isPlaying ? "Pausar música" : "Reproducir música");
        musicToggle.setAttribute("title", isPlaying ? "Pausar música" : "Reproducir música");

    }

}

if(music){

    music.addEventListener("play", updateMusicPlayer);
    music.addEventListener("pause", updateMusicPlayer);
    music.addEventListener("ended", updateMusicPlayer);

}

if(musicToggle && music){

    musicToggle.addEventListener("click", ()=>{

        if(music.paused){

            music.play().catch(()=>{});

        }
        else{

            music.pause();

        }

    });

}

// Transición
const transition = document.getElementById("transition");
const heartRain = document.getElementById("heartRain");
const spotifyForm = document.getElementById("spotifyForm");
const spotifyLink = document.getElementById("spotifyLink");
const spotifySongs = document.getElementById("spotifySongs");
const spotifyMessage = document.getElementById("spotifyMessage");
const petDays = document.getElementById("petDays");
const petProgressBar = document.getElementById("petProgressBar");
const petProgressText = document.getElementById("petProgressText");
const petFoodStatus = document.getElementById("petFoodStatus");
const skinsToggle = document.getElementById("skinsToggle");
const skinsMenu = document.getElementById("skinsMenu");
const skinButtons = document.querySelectorAll(".skin-button");
const sendHome = document.getElementById("sendHome");
const kuromiWorld = document.getElementById("kuromiWorld");
const kuromiPet = document.getElementById("kuromiPet");
const kuromiImage = document.getElementById("kuromiImage");
const worldFoods = document.getElementById("worldFoods");
const petPanelToggle = document.getElementById("petPanelToggle");
const petControlPanel = document.getElementById("petControlPanel");
const petPanelClose = document.getElementById("petPanelClose");
const adminPanel = document.getElementById("adminPanel");
const adminPanelClose = document.getElementById("adminPanelClose");
const petSpeed = document.getElementById("petSpeed");
const petSpeedValue = document.getElementById("petSpeedValue");
const adminWorldToggles = document.querySelectorAll(".admin-world-toggle");
const resetPetProgress = document.getElementById("resetPetProgress");
const unlockFinalAdmin = document.getElementById("unlockFinalAdmin");
const lockFinalAdmin = document.getElementById("lockFinalAdmin");
const adminFinalStatus = document.getElementById("adminFinalStatus");
const finalVideo = document.getElementById("finalVideo");
const finalSoundToggle = document.getElementById("finalSoundToggle");

// El panel debe acompañar todas las secciones, no solo la pantalla de inicio.
if(sidebar && app){

    app.prepend(sidebar);

}

// Carta
const letterText = document.getElementById("letterText");
const continueBtn = document.getElementById("continueBtn");
const loveDays = document.getElementById("loveDays");
const loveHours = document.getElementById("loveHours");
const loveMinutes = document.getElementById("loveMinutes");

// Evita que varias pulsaciones dejen una transición pendiente.
let transitionTimer;
let heartRainTimer;
let resumeBackgroundMusicAfterFinal = false;

// Las secciones privadas permanecen cerradas hasta validar la contraseña.
let isUnlocked = false;

function setMenuLocked(locked){

    menuItems.forEach((button,index)=>{

        if(index === 0) return;

        button.disabled = locked;
        button.setAttribute("aria-disabled", String(locked));

    });

}

setMenuLocked(true);
/*==================================================
                MOUSE GLOW
==================================================*/

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    if(mouseGlow){

        mouseGlow.style.left = `${x}px`;
        mouseGlow.style.top = `${y}px`;

    }

    if(cursorLight){

        cursorLight.style.left = `${x}px`;
        cursorLight.style.top = `${y}px`;

    }

});



/*==================================================
            CORAZONES FLOTANTES
==================================================*/

function createHeart(){

    if(!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 18) + "px";

    heart.style.animationDuration = (8 + Math.random() * 6) + "s";

    heart.style.opacity = (0.2 + Math.random() * 0.5);

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 14000);

}



/*==================================================
            INICIAR EFECTOS
==================================================*/

setInterval(createHeart, 450);
/*==================================================
                CAMBIAR PÁGINA
==================================================*/

function showPage(pageId){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    const page = document.getElementById(pageId);

    if(page){

        page.classList.add("active");

    }

}


/*==================================================
            DESBLOQUEAR
==================================================*/

function unlockWebsite(){

    if(!passwordInput) return;

    const password = passwordInput.value
        .trim()
        .toLowerCase();

    const validPasswords = ["4 de mayo", "4 mayo", "mayo 4"];

    if(validPasswords.includes(password)){

        isUnlocked = true;
        setMenuLocked(false);
        updateFinalLock();

        passwordInput.value = "";
        passwordInput.placeholder = "Contenido desbloqueado";
        passwordInput.readOnly = true;

        if(unlockBtn){

            unlockBtn.textContent = "Desbloqueado ✓";
            unlockBtn.disabled = true;

        }

        if(unlockMessage){

            unlockMessage.textContent = "Página desbloqueada. Ya puedes explorar nuestros recuerdos. ❤️";
            unlockMessage.classList.add("show");

        }

        if(music){

            music.play().catch(()=>{});

        }

    }

    else{

        alert("Contraseña incorrecta ❤️");

    }

}



/*==================================================
                EVENTOS
==================================================*/

if(unlockBtn){

    unlockBtn.addEventListener("click",unlockWebsite);

}



if(passwordInput){

    passwordInput.addEventListener("keydown",(event)=>{

        if(event.key==="Enter"){

            unlockWebsite();

        }

    });

}
/*==================================================
                MENÚ LATERAL
==================================================*/

const pageNames = [

    "inicio",

    "carta",

    "recuerdos",

    "nosotros",

    "musica",

    "mascota",

    "final"

];



menuItems.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        // La página de inicio es la única disponible antes del acceso.
        if(!isUnlocked && pageNames[index] !== "inicio"){

            passwordInput?.focus();
            return;

        }

        if(pageNames[index] === "final" && !isFinalUnlocked()){

            return;

        }

        if(pageNames[index] === "musica" && music?.paused){

            music.play().catch(()=>{});

        }

        transitionTo(pageNames[index]);

    });

});



/*==================================================
            BOTÓN ACTIVO
==================================================*/

function setActiveMenu(pageId){

    menuItems.forEach((button,index)=>{

        button.classList.remove("active");



        if(pageNames[index]===pageId){

            button.classList.add("active");

        }

    });

}
/*==================================================
                NAVEGAR
==================================================*/

function goToPage(pageId){

    // Cambiar página
    showPage(pageId);

    // Cambiar botón activo
    setActiveMenu(pageId);

    if(pageId === "musica" && music){

        music.play().catch(()=>{});

    }

}



/*==================================================
            TRANSICIÓN
==================================================*/

function transitionTo(pageId){

    clearTimeout(transitionTimer);

    createHeartRain(pageId === "final");

    transitionTimer = setTimeout(()=>{

        goToPage(pageId);

    }, 900);

}

function createHeartRain(isFinalMoment = false){

    if(!heartRain) return;

    clearTimeout(heartRainTimer);
    heartRain.replaceChildren();
    heartRain.classList.remove("show", "final-rain");

    const hearts = ["♥", "❤", "♡", "💗", "💕"];

    // Menos elementos a la vez, pero más grandes: se ve intenso sin recargar el navegador.
    for(let index = 0; index < 180; index++){

        const heart = document.createElement("span");
        heart.className = "rain-heart";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.setProperty("--x", `${Math.random() * 108 - 4}vw`);
        heart.style.setProperty("--delay", `${Math.random() * 1.15}s`);
        heart.style.setProperty("--duration", `${2.4 + Math.random() * 1.1}s`);
        heart.style.setProperty("--size", `${26 + Math.random() * 30}px`);
        heart.style.setProperty("--drift", `${Math.random() * 150 - 75}px`);
        heartRain.appendChild(heart);

    }

    requestAnimationFrame(()=>{

        heartRain.classList.toggle("final-rain", isFinalMoment);
        heartRain.classList.add("show");

    });
    heartRainTimer = setTimeout(()=>{

        heartRain.classList.remove("show");
        setTimeout(()=> heartRain.replaceChildren(), 450);

    }, 4700);

}

/*==================================================
                    MÚSICA
==================================================*/

const spotifyStorageKey = "para-ti-spotify-songs";
const defaultSpotifySongs = [

    "https://open.spotify.com/intl-es/track/72LoxDOpvjzBmfD9R94emX?si=64ef8a9f934c4890",
    "https://open.spotify.com/intl-es/track/3IejapVLfOvBLaXlB2I0fK?si=c2cf9913fbe947f9",
    "https://open.spotify.com/intl-es/track/791SeQLJ0mcwZALYEIlb2V?si=79a1460c5ae74fdb"

];

function showSpotifyMessage(message){

    if(spotifyMessage) spotifyMessage.textContent = message;

}

function isSpotifyLink(link){

    try{

        const url = new URL(link);
        return ["open.spotify.com", "spotify.link"].includes(url.hostname);

    }
    catch{

        return false;

    }

    if(finalVideo){

        if(pageId === "final"){
            resumeBackgroundMusicAfterFinal = Boolean(music && !music.paused);
            music?.pause();
            finalVideo.currentTime = 0;
            finalVideo.muted = true;
            finalSoundToggle && (finalSoundToggle.textContent = "🔊 Escuchar con sonido");
            finalVideo.play().catch(()=>{});
        }
        else{
            finalVideo.pause();
            finalVideo.currentTime = 0;

            if(resumeBackgroundMusicAfterFinal && music){
                music.play().catch(()=>{});
                resumeBackgroundMusicAfterFinal = false;
            }
        }

    }

}

function createSpotifyCard(link){

    if(!spotifySongs) return;

    const card = document.createElement("article");
    card.className = "spotify-card";
    card.innerHTML = `
        <div class="spotify-cover" aria-hidden="true">♫</div>
        <div class="spotify-card-info">
            <span>Una canción para nosotros</span>
            <h2>Cargando canción...</h2>
            <p>Spotify</p>
        </div>
        <a href="${link}" target="_blank" rel="noopener noreferrer">Escuchar <span aria-hidden="true">↗</span></a>
    `;
    spotifySongs.prepend(card);

    fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(link)}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {

            const title = card.querySelector("h2");
            const artist = card.querySelector("p");
            const cover = card.querySelector(".spotify-cover");

            title.textContent = data.title || "Una canción para ti";
            artist.textContent = data.author_name || "Spotify";

            if(data.thumbnail_url){

                cover.textContent = "";
                cover.style.backgroundImage = `url("${data.thumbnail_url}")`;

            }

        })
        .catch(()=>{

            card.querySelector("h2").textContent = "Una canción para ti";

        });

}

function getSavedSpotifySongs(){

    try{

        return JSON.parse(localStorage.getItem(spotifyStorageKey)) || [];

    }
    catch{

        return [];

    }

}

function saveSpotifySongs(songs){

    localStorage.setItem(spotifyStorageKey, JSON.stringify(songs));

}

const savedSpotifySongs = getSavedSpotifySongs();
const allSpotifySongs = [...new Set([...defaultSpotifySongs, ...savedSpotifySongs])];
allSpotifySongs.reverse().forEach(createSpotifyCard);

if(spotifyForm){

    spotifyForm.addEventListener("submit", event => {

        event.preventDefault();
        const link = spotifyLink.value.trim();

        if(!isSpotifyLink(link)){

            showSpotifyMessage("Pega un enlace válido de Spotify.");
            return;

        }

        const songs = getSavedSpotifySongs();

        if([...defaultSpotifySongs, ...songs].includes(link)){

            showSpotifyMessage("Esa canción ya está guardada. ♥");
            return;

        }

        songs.push(link);
        saveSpotifySongs(songs);
        createSpotifyCard(link);
        spotifyForm.reset();
        showSpotifyMessage("Canción agregada a nuestra banda sonora. ♥");

    });

}



/*==================================================
                    CARTA
==================================================*/

// El HTML deja este espacio vacío para que el mensaje aparezca correctamente
// sin depender de contenido incrustado o de una carga externa.
if(letterText){

    letterText.textContent = `Quería crear un lugar que se sintiera un poquito como nosotros: especial, tranquilo y lleno de recuerdos bonitos.\n\nGracias por cada momento, por cada sonrisa y por hacer que mi vida sea más bonita simplemente estando en ella.\n\nEsto es para ti, mi amor. ❤️`;

}



/*==================================================
                    KUROMI
==================================================*/

const petStorageKey = "para-ti-kuromi-progress-v2";
const petAdminStorageKey = "para-ti-kuromi-admin";
const petFoods = ["alimento1", "alimento2", "alimento3"];

function getPetAdminSettings(){

    const defaults = { speed:1, ramen:true, house:true, foods:true, finalOverride:false };

    try{

        return { ...defaults, ...JSON.parse(localStorage.getItem(petAdminStorageKey)) };

    }
    catch{

        return defaults;

    }

}

function savePetAdminSettings(settings){

    localStorage.setItem(petAdminStorageKey, JSON.stringify(settings));

}

function applyPetAdminSettings(){

    const settings = getPetAdminSettings();

    if(petSpeed) petSpeed.value = settings.speed;
    if(petSpeedValue) petSpeedValue.textContent = `${Number(settings.speed).toFixed(1)}x`;
    adminWorldToggles.forEach(toggle => toggle.checked = settings[toggle.dataset.adminItem]);
    document.querySelectorAll("[data-world-item]").forEach(item => item.hidden = !settings[item.dataset.worldItem]);
    updateAdminFinalControls(settings);
    renderPet();

}

function getLocalDate(){

    const date = new Date();
    const offset = date.getTimezoneOffset();
    return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10);

}

function getPetState(){

    const defaultState = { meals:{}, skin:"mascota", position:{ x:25, y:74 } };

    try{

        return { ...defaultState, ...JSON.parse(localStorage.getItem(petStorageKey)) };

    }
    catch{

        return defaultState;

    }

}

function savePetState(state){

    localStorage.setItem(petStorageKey, JSON.stringify(state));

}

function getCompletedDays(state = getPetState()){

    return Object.values(state.meals).filter(foods => petFoods.every(food => foods.includes(food))).length;

}

function isFinalUnlocked(){

    return getPetAdminSettings().finalOverride || getCompletedDays() >= 3;

}

function updateFinalLock(){

    const finalIndex = pageNames.indexOf("final");
    const finalButton = menuItems[finalIndex];

    if(!finalButton) return;

    const unlocked = isUnlocked && isFinalUnlocked();
    finalButton.disabled = !unlocked;
    finalButton.setAttribute("aria-disabled", String(!unlocked));
    finalButton.title = unlocked ? "Final desbloqueado" : "Alimenta a Kuromi durante 3 días para desbloquear el final";

}

function updateKuromiAppearance(state = getPetState()){

    if(kuromiImage) kuromiImage.src = `mascota/${state.skin}.png`;

    if(kuromiPet){

        kuromiPet.style.left = `${state.position.x}%`;
        kuromiPet.style.top = `${state.position.y}%`;

    }

}

function renderPet(){

    const state = getPetState();
    const todayFoods = state.meals[getLocalDate()] || [];
    const completedDays = Math.min(getCompletedDays(state), 3);
    const remainingDays = Math.max(3 - completedDays, 0);

    if(petDays) petDays.textContent = `${completedDays} de 3 días`;
    if(petProgressBar) petProgressBar.style.width = `${completedDays / 3 * 100}%`;
    if(petProgressText) petProgressText.textContent = remainingDays ? `Aún faltan ${remainingDays} día${remainingDays === 1 ? "" : "s"} para el final.` : "¡El final ya está desbloqueado! ♥";
    if(petFoodStatus) petFoodStatus.textContent = todayFoods.length === 3 ? "¡Kuromi ya comió todo hoy! Vuelve mañana. ♥" : `${todayFoods.length} de 3 alimentos entregados hoy.`;

    skinButtons.forEach(button => button.classList.toggle("selected", button.dataset.skin === state.skin));
    updateKuromiAppearance(state);
    renderWorldFoods(todayFoods);
    updateAdminFinalControls();
    updateFinalLock();

}

function feedKuromi(food){

    const state = getPetState();
    const today = getLocalDate();
    const todayFoods = state.meals[today] || [];

    if(todayFoods.includes(food)) return;

    state.meals[today] = [...todayFoods, food];
    savePetState(state);
    kuromiPet?.classList.add("fed-pop");
    setTimeout(()=> kuromiPet?.classList.remove("fed-pop"), 500);
    renderPet();

}

function renderWorldFoods(todayFoods){

    if(!worldFoods) return;

    if(!getPetAdminSettings().foods){

        worldFoods.replaceChildren();
        return;

    }

    const positions = {
        alimento1:{ x:17, y:72 },
        alimento2:{ x:53, y:68 },
        alimento3:{ x:71, y:34 }
    };

    worldFoods.replaceChildren();

    petFoods.filter(food => !todayFoods.includes(food)).forEach(food => {

        const item = document.createElement("button");
        const position = positions[food];
        item.type = "button";
        item.className = "world-food";
        item.dataset.food = food;
        item.style.left = `${position.x}%`;
        item.style.top = `${position.y}%`;
        item.innerHTML = `<img src="mascota/${food}.png" alt="${food}">`;
        setupFoodDrag(item);
        worldFoods.appendChild(item);

    });

}

function setupFoodDrag(item){

    let dragging = false;

    item.addEventListener("pointerdown", event => {

        dragging = true;
        item.setPointerCapture(event.pointerId);
        item.classList.add("dragging");

    });

    item.addEventListener("pointermove", event => {

        if(!dragging || !kuromiWorld) return;

        const rect = kuromiWorld.getBoundingClientRect();
        item.style.left = `${Math.max(4, Math.min(94, (event.clientX - rect.left) / rect.width * 100))}%`;
        item.style.top = `${Math.max(12, Math.min(84, (event.clientY - rect.top) / rect.height * 100))}%`;

    });

    item.addEventListener("pointerup", ()=>{

        dragging = false;
        item.classList.remove("dragging");
        const petRect = kuromiPet?.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        if(petRect && itemRect){

            const x = itemRect.left + itemRect.width / 2;
            const y = itemRect.top + itemRect.height / 2;
            const petX = petRect.left + petRect.width / 2;
            const petY = petRect.top + petRect.height / 2;

            if(Math.hypot(x - petX, y - petY) < petRect.width * .72){

                feedKuromi(item.dataset.food);

            }

        }

    });

}

if(skinsToggle){

    skinsToggle.addEventListener("click", ()=>{

        skinsMenu.hidden = !skinsMenu.hidden;
        skinsToggle.textContent = skinsMenu.hidden ? "Cambiar skin" : "Cerrar skins";

    });

}

skinButtons.forEach(button => {

    button.addEventListener("click", ()=>{

        const state = getPetState();
        state.skin = button.dataset.skin;
        savePetState(state);
        renderPet();

    });

});

if(sendHome){

    sendHome.addEventListener("click", ()=>{

        const state = getPetState();
        state.position = { x:79, y:65 };
        savePetState(state);
        renderPet();

    });

}

let isDraggingKuromi = false;

if(kuromiPet && kuromiWorld){

    let dragging = false;
    let moved = false;

    kuromiPet.addEventListener("pointerdown", event => {

        dragging = true;
        isDraggingKuromi = true;
        moved = false;
        kuromiPet.setPointerCapture(event.pointerId);
        kuromiPet.classList.add("walking");
        kuromiPet.classList.add("dragging");

    });

    kuromiPet.addEventListener("pointermove", event => {

        if(!dragging) return;

        const rect = kuromiWorld.getBoundingClientRect();
        const x = Math.max(5, Math.min(91, (event.clientX - rect.left) / rect.width * 100));
        const y = Math.max(19, Math.min(78, (event.clientY - rect.top) / rect.height * 100));
        const state = getPetState();

        state.position = { x, y };
        savePetState(state);
        updateKuromiAppearance(state);
        moved = true;

    });

    kuromiPet.addEventListener("pointerup", ()=>{

        dragging = false;
        isDraggingKuromi = false;
        kuromiPet.classList.remove("walking");
        kuromiPet.classList.remove("dragging");

        if(!moved){

            kuromiPet.classList.remove("pop");
            requestAnimationFrame(()=> kuromiPet.classList.add("pop"));
            setTimeout(()=> kuromiPet.classList.remove("pop"), 420);

        }

    });

}

// Kuromi explora el césped sola con pequeños saltitos.
function runAutoWalk(){

    const settings = getPetAdminSettings();
    const mascotPage = document.getElementById("mascota");
    const walkDuration = 2600 / settings.speed;

    if(mascotPage?.classList.contains("active") && !isDraggingKuromi && kuromiPet){

        const state = getPetState();
        state.position = {
            x: Math.max(12, Math.min(84, state.position.x + (Math.random() * 18 - 9))),
            y: Math.max(66, Math.min(82, state.position.y + (Math.random() * 8 - 4)))
        };
        savePetState(state);
        kuromiPet.style.setProperty("--pet-walk-duration", `${walkDuration / 1000}s`);
        kuromiPet.classList.add("walking");
        updateKuromiAppearance(state);
        setTimeout(()=> kuromiPet?.classList.remove("walking"), walkDuration);

    }

    setTimeout(runAutoWalk, 6200 / settings.speed);

}

runAutoWalk();

function setPetPanel(open){

    if(!petControlPanel || !petPanelToggle) return;

    petControlPanel.hidden = !open;
    petPanelToggle.setAttribute("aria-expanded", String(open));

}

petPanelToggle?.addEventListener("click", ()=> setPetPanel(petControlPanel.hidden));
petPanelClose?.addEventListener("click", ()=> setPetPanel(false));

function setAdminPanel(open){

    if(!adminPanel) return;

    adminPanel.hidden = !open;

}

function updateAdminFinalControls(settings = getPetAdminSettings()){

    const completedDays = getCompletedDays();
    const naturallyUnlocked = completedDays >= 3;

    if(adminFinalStatus){
        adminFinalStatus.textContent = settings.finalOverride
            ? "Desbloqueado manualmente"
            : naturallyUnlocked
                ? "Desbloqueado por progreso"
                : `${Math.min(completedDays, 3)} de 3 días completados`;
    }

    if(unlockFinalAdmin) unlockFinalAdmin.disabled = settings.finalOverride || naturallyUnlocked;
    if(lockFinalAdmin) lockFinalAdmin.disabled = !settings.finalOverride;

}

petSpeed?.addEventListener("input", ()=>{

    const settings = getPetAdminSettings();
    settings.speed = Number(petSpeed.value);
    savePetAdminSettings(settings);
    applyPetAdminSettings();

});

adminWorldToggles.forEach(toggle => {

    toggle.addEventListener("change", ()=>{

        const settings = getPetAdminSettings();
        settings[toggle.dataset.adminItem] = toggle.checked;
        savePetAdminSettings(settings);
        applyPetAdminSettings();

    });

});

resetPetProgress?.addEventListener("click", ()=>{

    localStorage.removeItem(petStorageKey);
    renderPet();

});

unlockFinalAdmin?.addEventListener("click", ()=>{

    const settings = getPetAdminSettings();
    settings.finalOverride = true;
    savePetAdminSettings(settings);
    applyPetAdminSettings();

});

lockFinalAdmin?.addEventListener("click", ()=>{

    const settings = getPetAdminSettings();
    settings.finalOverride = false;
    savePetAdminSettings(settings);
    applyPetAdminSettings();

});

adminPanelClose?.addEventListener("click", ()=> setAdminPanel(false));
finalSoundToggle?.addEventListener("click", ()=>{

    if(!finalVideo) return;

    finalVideo.muted = !finalVideo.muted;
    finalSoundToggle.textContent = finalVideo.muted ? "🔊 Escuchar con sonido" : "🔇 Silenciar video";
    finalVideo.play().catch(()=>{});

});

const adminKeys = new Set();

document.addEventListener("keydown", event => {

    adminKeys.add(event.key.toLowerCase());

    if(adminKeys.has("r") && adminKeys.has("c")){

        event.preventDefault();
        setAdminPanel(adminPanel?.hidden);
        adminKeys.clear();

    }

});

document.addEventListener("keyup", event => adminKeys.delete(event.key.toLowerCase()));

applyPetAdminSettings();

if(continueBtn){

    continueBtn.addEventListener("click",()=>{

        transitionTo("recuerdos");

    });

}



/*==================================================
                CONTADOR DE NOSOTROS
==================================================*/

function updateLoveCounter(){

    if(!loveDays || !loveHours || !loveMinutes) return;

    const startDate = new Date(2026, 4, 4);
    const elapsed = Math.max(0, Date.now() - startDate.getTime());
    const totalMinutes = Math.floor(elapsed / 60000);

    loveDays.textContent = Math.floor(totalMinutes / 1440);
    loveHours.textContent = Math.floor((totalMinutes % 1440) / 60);
    loveMinutes.textContent = totalMinutes % 60;

}

updateLoveCounter();
setInterval(updateLoveCounter, 30000);



/*==================================================
            ATAJOS
==================================================*/

// Ahora podremos usar:
//
// transitionTo("inicio");
//
// transitionTo("carta");
//
// transitionTo("recuerdos");
//
// transitionTo("nosotros");
//
// transitionTo("final");
//
