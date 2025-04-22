document.addEventListener('DOMContentLoaded', () => {
    // Элементы
    const textBox = document.getElementById('text-box');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const showPhotoBtn = document.getElementById('showPhotoBtn');
    const photo = document.getElementById('photo');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');

    // Ваш текст
    const mainText = [
        "Моя любимая, ты так же прекрасна и нежна, как этот Нежный Цветок из Hollow Knight...",
        "Ты наполнила мою жизнь светом, как этот цветок озаряет мрачные земли...",
        "Я готов пройти через любые преграды, чтобы быть рядом с тобой..."
    ];

    const finalText = [
        "Этот цветок — тебе...",
        "Прости меня, если сделал тебе больно.",
        "Ты — самое дорогое, что у меня есть."
    ];

    // Музыка
    bgMusic.volume = 0.3;
    let isMusicPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.textContent = '🔇';
        } else {
            bgMusic.play();
            musicBtn.textContent = '🔈';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Анимация печати
    async function typeWriter(element, text, speed = 30) {
        element.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text.charAt(i);
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        element.style.borderRight = 'none';
    }

    // Показ текста
    async function showAllText() {
        for (const line of mainText) {
            const p = document.createElement('p');
            message.appendChild(p);
            await typeWriter(p, line);
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        showPhotoBtn.classList.remove('hidden');
    }

    // Запуск
    (async () => {
        await typeWriter(title, "Моя любимая...");
        await showAllText();
    })();

    // Показ фото
    showPhotoBtn.addEventListener('click', async () => {
        textBox.classList.add('hidden');
        photo.classList.remove('hidden');
        await typeWriter(line1, finalText[0], 40);
        await typeWriter(line2, finalText[1], 60);
        await typeWriter(line3, finalText[2], 50);
    });
});
