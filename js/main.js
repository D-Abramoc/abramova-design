(function() {
    'use strict';

    // ===== ДАННЫЕ ПРОЕКТОВ (редактируйте здесь) =====
    const projects = [{
        id: 1,
        title: 'Гостиная в Кемерово',
        type: 'Жилой интерьер',
        year: '2025',
        area: '72 м²',
        works: 'Дизайн-проект, подбор материалов, авторский надзор',
        description: 'Современная гостиная с элементами скандинавского стиля. Заказчик хотел светлое пространство с акцентами из натурального дерева. Мы разработали открытую планировку, зонировали пространство с помощью света и текстиля.',
        cover: 'images/portfolio/main-room.jpg',
        images: [
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg'
        ]
    }, {
        id: 2,
        title: 'Детская комната, Новосибирск',
        type: 'Детский интерьер',
        year: '2024',
        area: '34 м²',
        works: 'Дизайн-проект, 3D-визуализация, комплектация',
        description: 'Создали игровое и учебное пространство для двух детей. Основная задача — максимально эффективно использовать площадь. Сделали более 40 визуализаций, чтобы учесть все пожелания заказчиков.',
        cover: 'images/portfolio/child-room.jpg',
        images: [
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg'
        ]
    }, {
        id: 3,
        title: 'Кухня-гостиная, Москва',
        type: 'Открытое пространство',
        year: '2024',
        area: '45 м²',
        works: 'Перепланировка, дизайн-проект, авторский надзор',
        description: 'Объединили кухню и гостиную в одно светлое пространство. Установили остров с барной стойкой, продумали систему хранения. Использовали материалы с оптимальным соотношением цена/качество.',
        cover: 'images/portfolio/kitchen.jpg',
        images: [
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg'
        ]
    }, {
        id: 4,
        title: 'Кабинет в Томске',
        type: 'Рабочее пространство',
        year: '2024',
        area: '28 м²',
        works: 'Дизайн-проект, авторский надзор, комплектация',
        description: 'Продуманное рабочее пространство с зоной отдыха. Использовали тёмные оттенки для концентрации, добавили акцентное освещение. Заказчик отмечает: "Теперь это лучшее место в квартире".',
        cover: 'images/portfolio/cabinet.jpg',
        images: [
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg'
        ]
    }, {
        id: 5,
        title: 'Загородный дом, Берлин',
        type: 'Архитектурный проект',
        year: '2023',
        area: '180 м²',
        works: 'Архитектурное проектирование, дизайн интерьеров, надзор',
        description: 'Проект загородного дома с панорамным остеклением. Сочетали современную архитектуру с экологичными материалами. Разработали уникальные лестницы и систему освещения.',
        cover: 'images/portfolio/cantry-house.jpg',
        images: [
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg'
        ]
    }, {
        id: 6,
        title: 'Винный погреб, Краснодар',
        type: 'Интерьер особого назначения',
        year: '2024',
        area: '22 м²',
        works: 'Дизайн-проект, подбор материалов, авторский надзор',
        description: 'Создали атмосферное пространство для хранения и дегустации вин. Использовали натуральный камень, тёплое освещение и продуманную систему климат-контроля.',
        cover: 'images/portfolio/vine-room.jpg',
        images: [
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg',
            'images/portfolio/blank.jpg'
        ]
    }];

    // ===== 1. БУРГЕР-МЕНЮ =====
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('navMenu');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('open');
    });

    // Закрываем меню при клике на ссылку (на мобильных)
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('open');
        });
    });

    // ===== 2. ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = nav.querySelectorAll('a');

    function updateActiveLink() {
        let current = '';
        const scrollPos = window.scrollY + 120;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

    // ===== 3. ОБРАБОТКА ФОРМЫ =====
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Ваш запрос отправлен. Я свяжусь с вами в ближайшее время.');
        this.reset();
    });

    // ===== 4. АНИМАЦИЯ ПРИ СКРОЛЛЕ =====
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-item, .portfolio-item, .review-card').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== 5. ОТРИСОВКА КАРТОЧЕК ПОРТФОЛИО =====
    const grid = document.getElementById('portfolioGrid');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'portfolio-item';
        card.style.backgroundImage = `url('${project.cover}')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.innerHTML = `<span>${project.title}</span>`;
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function() {
            openModal(project.id);
        });
        
        grid.appendChild(card);
    });

    // ===== 6. МОДАЛЬНОЕ ОКНО =====
    const modal = document.getElementById('portfolioModal');
    const closeBtn = document.getElementById('modalClose');

    function openModal(id) {
        const project = projects.find(p => p.id === id);
        if (!project) return;

        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalSubtitle').textContent = project.type;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalYear').textContent = project.year;
        document.getElementById('modalArea').textContent = project.area;
        document.getElementById('modalWorks').textContent = project.works;

        const gallery = document.getElementById('modalGallery');
        gallery.innerHTML = '';
        
        project.images.forEach((img, index) => {
            const imgEl = document.createElement('img');
            imgEl.src = img;
            imgEl.alt = `${project.title} - фото ${index + 1}`;
            if (index === 0) {
                imgEl.classList.add('full-width');
            }
            imgEl.addEventListener('click', function() {
                window.open(this.src, '_blank');
            });
            gallery.appendChild(imgEl);
        });

        modal.style.display = 'flex';
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
        
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

})();