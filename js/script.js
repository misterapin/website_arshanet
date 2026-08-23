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

// Fungsi Lightbox (Zoom Foto)
function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    const captionTextElem = document.getElementById("lightboxCaption");

    if (modal && modalImg && captionTextElem) {
        modal.style.display = "flex"; // Menggunakan flex agar otomatis berada di tengah
        modalImg.src = imgSrc;
        captionTextElem.textContent = captionText || "";
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Fungsi Tombol "Load More" (Tampilkan Foto Lainnya)
document.addEventListener("DOMContentLoaded", function() {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const loadMoreContainer = document.getElementById("loadMoreContainer");

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function() {
            const hiddenItems = document.querySelectorAll(".portfolio-card.hidden-item");
            
            // Tampilkan semua item yang tersembunyi
            hiddenItems.forEach(item => {
                item.classList.remove("hidden-item");
            });

            // Sembunyikan tombol setelah semua foto dimuat
            if (loadMoreContainer) {
                loadMoreContainer.style.display = "none";
            }
        });
    }
});