// Menampilkan tahun otomatis di bagian footer
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. Menampilkan tahun otomatis di footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Animasi Fade In saat elemen digulir (Scroll Animation)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Elemen akan mulai muncul ketika 10% bagian terlihat
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Berhenti mengamati setelah animasi berjalan
            }
        });
    }, observerOptions);

    // Pilih elemen-elemen yang ingin diberi efek animasi
    const elementsToAnimate = document.querySelectorAll('.card, .mini-card, .feature-item, .section-title, .hero-banner-container');
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Fungsi Lightbox Global (Harus di luar DOMContentLoaded agar bisa dipanggil onclick)
function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");

    if (modal && modalImg) {
        modal.style.display = "flex"; // Memunculkan modal dengan flexbox
        modalImg.src = imgSrc;
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.style.display = "none"; // Menyembunyikan modal
    }
}

// Logika lainnya di dalam DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // 1. Tahun footer otomatis
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Tombol Load More Galeri
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const loadMoreContainer = document.getElementById("loadMoreContainer");

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function() {
            const hiddenItems = document.querySelectorAll(".portfolio-card.hidden-item");
            hiddenItems.forEach(item => {
                item.classList.remove("hidden-item");
            });
            if (loadMoreContainer) {
                loadMoreContainer.style.display = "none";
            }
        });
    }
});