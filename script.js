// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Animasi Scroll (Fade In) =====
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const delay = entry.target.style.getPropertyValue('--delay') || '0s';
            entry.target.style.transitionDelay = delay;
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
});

// ===== Typography Expand =====
const btnMore = document.getElementById('btn-more');
const extraGrid = document.getElementById('extra');

btnMore.addEventListener('click', function(e) {
    e.preventDefault();

    const isExpanded = extraGrid.classList.contains('expanded');

    if (isExpanded) {
        // Tutup kembali
        extraGrid.classList.remove('expanded');
        btnMore.textContent = 'Show More';
    } else {
        // Buka dan tampilkan gambar tambahan
        extraGrid.classList.add('expanded');
        btnMore.textContent = 'Show Less';

        // Scroll halus ke gambar tambahan
        setTimeout(function() {
            extraGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
});

// ======= Organitation Expand ========= //
const btn = document.getElementById('btn-organitation')
const orgExtra = document.getElementById('org-extra')

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const OrgExpanded = orgExtra.classList.contains('expanded');

    if (OrgExpanded) {
        // Tutup kembali
        orgExtra.classList.remove('expanded');
        btn.textContent = 'Show More';
    } 
    else {
        // Buka dan tampilkan gambar tambahan
        orgExtra.classList.add('expanded');
        btn.textContent = 'Show Less';

        // Scroll halus ke gambar tambahan
        setTimeout(function() {
            orgExtra.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
});

// =============================== (POP UP) ================================

const ProgramBtn = document.getElementById('btn');
const daftarBtn = document.getElementById('btn-daftar')
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');



// Buka modal saat tombol "BACA" diklik
ProgramBtn.addEventListener('click', function () {
    modalOverlay.classList.add('modal-open');
});
daftarBtn.addEventListener('click', function () {
    modalOverlay.classList.add('modal-open');
});

// Tutup saat tombol close (x) diklik
modalClose.addEventListener('click', function () {
    modalOverlay.classList.remove('modal-open');
});

// Tutup modal saat area gelap di luar kotak surat diklik
modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('modal-open');
    }
});

// Tutup modal saat tombol Escape ditekan
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modalOverlay.classList.remove('modal-open');
    }
});
