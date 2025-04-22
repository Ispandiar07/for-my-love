document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementById('text-box');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const showPhotoBtn = document.getElementById('showPhotoBtn');
    const photo = document.getElementById('photo');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const bgMusic = document.getElementById('bgMusic');

    const mainText = [
        "Ты помнишь этот цветок? Он такой же нежный, как наши чувства...",
        "Даже когда кажется, что всё увядает, любовь может расцвести вновь.",
        "Прости меня, если задел твоё сердце. Я не хочу терять нас."
    ];

    const finalText = [
        "Этот цветок — наш символ.",
        "Прости меня...",
        "Давай начнём снова."
    ];

    // Тихий запуск музыки
    bgMusic.volume = 0.3;
    bgMusic.play().catch(e => console.log("Автовоспроизведение заблокировано"));

    // Анимация печати
    async function typeWriter(element, text, speed = 30) {
        element.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text.charAt(i);
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        element.style.borderRight = 'none';
    }

    // Показ основного текста
    async function showAllText() {
        for (const line of mainText) {
            const p = document.createElement('p');
            message.appendChild(p);
            await typeWriter(p, line);
            p.classList.add('visible');
            await new Promise(resolve => setTimeout(resolve, 800));
        }
        showPhotoBtn.classList.remove('hidden');
        showPhotoBtn.classList.add('visible');
    }

    // Запуск анимации
    (async () => {
        await typeWriter(title, "Моя любимая...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        await showAllText();
    })();

    // Показ фото и финального текста
    showPhotoBtn.addEventListener('click', async () => {
        textBox.classList.add('hidden');
        photo.classList.remove('hidden');
        await new Promise(resolve => setTimeout(resolve, 1000));
        photo.classList.add('visible');
        
        await typeWriter(line1, finalText[0], 40);
        await typeWriter(line2, finalText[1], 60);
        await typeWriter(line3, finalText[2], 50);
    });
});
