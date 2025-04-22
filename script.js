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

    // ВАШ ПОЛНЫЙ ТЕКСТ (разбит на абзацы для анимации)
    const mainText = [
        "Моя любимая, ты так же прекрасна и нежна, как этот Нежный Цветок из Hollow Knight.",
        "Он кажется таким хрупким, почти невесомым, но в то же время в нем скрыта удивительная жизненная сила, подобно моей любви к тебе.",
        "Ты наполнила мою жизнь светом и красотой, как этот цветок озаряет своим сиянием мрачные земли.",
        "",
        "Знаешь, чтобы доставить этот цветок к месту назначения, нужно пройти через множество опасностей, сражаться с врагами и избегать ловушек, не повредив ни одного лепестка.",
        "Так и наша любовь, моя дорогая, сталкивалась с трудностями, но каждое испытание лишь укрепляло нашу связь, делало ее сильнее и глубже.",
        "Я готов пройти через любые преграды, чтобы быть рядом с тобой, оберегать тебя и нашу любовь от всех невзгод.",
        "",
        "Ты — мой самый ценный цветок, расцветший в моем сердце.",
        "Я хочу оберегать тебя так же бережно, как Рыцарь нес этот хрупкий дар через весь Халлоунест, чтобы доставить его в целости и сохранности.",
        "Каждое мгновение, проведенное рядом с тобой, — это бесценный дар, и я обещаю хранить нашу любовь в самом сокровенном уголке души, как самое драгоценное сокровище.",
        "Ты — мой Нежный Цветок, и я никогда не позволю тебе увянуть.",
        "Ты — моя награда, мой самый нежный и прекрасный цветок во всем этом мире."
    ];

    // Финальное извинение (с фото)
    const finalText = [
        "Этот Нежный Цветок — тебе...",
        "Прости меня, если сделал тебе больно.",
        "Я очень ценю тебя и хочу, чтобы ты была счастлива."
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
            if (line.trim() === "") {
                message.innerHTML += "<br>";
                continue;
            }
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

    // Показ фото и извинения
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
