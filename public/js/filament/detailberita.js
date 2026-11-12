const activityId = window.location.pathname.split('/').pop();

let detailImages = [];
let detailIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const detailSlider = document.querySelector('.news-detail-slider');

const detailImagesContainer =
    document.getElementById('newsDetailImages');

const detailPrev =
    document.getElementById('newsDetailPrev');

const detailNext =
    document.getElementById('newsDetailNext');

const detailCounter =
    document.getElementById('newsDetailCounter');

async function loadActivityDetail() {
    const response = await fetch(`/activities/${activityId}`, {
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    });

    const result = await response.json();

    const activity = result.data;

    document.getElementById('newsDetailTitle').textContent =
        activity.title;

    document.getElementById('newsDetailDate').textContent =
        activity.location + ' - ' + formatActivityDate(activity.activity_date);

    document.getElementById('newsDetailDescription').innerHTML =
    (activity.description ?? '').replace(/\r?\n/g, '<br>');

    detailImages = activity.images ?? [];

    detailIndex = 0;

    renderDetailImage();
}

function renderDetailImage() {
    if (!detailImages.length) {
        detailImagesContainer.innerHTML = '';

        detailPrev.style.display = 'none';
        detailNext.style.display = 'none';
        detailCounter.style.display = 'none';

        return;
    }

    const image = detailImages[detailIndex];

    detailImagesContainer.innerHTML = `
        <img
            src="/storage/${image.image}"
            alt="Gambar ${detailIndex + 1}"
        >
    `;

    const multipleImages = detailImages.length > 1;

    detailPrev.style.display =
        multipleImages ? 'flex' : 'none';

    detailNext.style.display =
        multipleImages ? 'flex' : 'none';

    detailCounter.style.display =
        multipleImages ? 'block' : 'none';

    detailCounter.textContent =
        `${detailIndex + 1} / ${detailImages.length}`;
}

function nextDetailImage() {
    if (detailImages.length <= 1) {
        return;
    }

    detailIndex++;

    if (detailIndex >= detailImages.length) {
        detailIndex = 0;
    }

    renderDetailImage();
}

function prevDetailImage() {
    if (detailImages.length <= 1) {
        return;
    }

    detailIndex--;

    if (detailIndex < 0) {
        detailIndex = detailImages.length - 1;
    }

    renderDetailImage();
}

detailPrev.addEventListener('click', () => {
    prevDetailImage();
});

detailNext.addEventListener('click', () => {
    nextDetailImage();
});

detailSlider.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

detailSlider.addEventListener('touchmove', (event) => {
    touchEndX = event.touches[0].clientX;
});

detailSlider.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;

    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 50) {
        return;
    }

    if (swipeDistance < 0) {
        nextDetailImage();
    } else {
        prevDetailImage();
    }

    touchStartX = 0;
    touchEndX = 0;
});

function formatActivityDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

loadActivityDetail();