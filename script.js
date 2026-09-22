/* ================= OPEN INVITATION ================= */

const opening = document.getElementById("opening");
const openButton = document.getElementById("openInvitation");
const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

openButton.addEventListener("click", () => {

    opening.classList.add("hide");

    music.play().catch(() => {});

});


/* ================= MUSIC ================= */

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicButton.innerHTML = "♪";

    } else {

        music.play().catch(() => {});

        musicButton.innerHTML = "❚❚";

    }

    musicPlaying = !musicPlaying;

});


/* ================= COUNTDOWN ================= */

const weddingDate = new Date(
    "December 12, 2026 08:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


setInterval(updateCountdown, 1000);

updateCountdown();


/* ================= COPY REKENING ================= */

function copyRekening() {

    const rekening =
        document.getElementById("rekening").innerText;

    navigator.clipboard.writeText(rekening);

    alert("Nomor rekening berhasil disalin.");

}


/* ================= RSVP WHATSAPP ================= */

const rsvpForm =
    document.getElementById("rsvpForm");


rsvpForm.addEventListener("submit", function(e) {

    e.preventDefault();


    const name =
        document.getElementById("guestName").value;

    const attendance =
        document.getElementById("attendance").value;


    const phone =
        "6281234567890";


    const message =
        `Assalamu'alaikum. Saya ${name} ingin mengonfirmasi bahwa saya ${attendance} pada acara pernikahan Ahmad & Aisyah tanggal 12 Desember 2026. Terima kasih.`;


    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");

});
