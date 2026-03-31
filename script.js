/* =========================================================================
   T&L Support Portal - JavaScript Interactions
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Transform icon
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    /* --- 2. Sticky Header Styling --- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            header.style.padding = '5px 0';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
            header.style.padding = '0';
        }
        
        // Active link highlighting
        highlightActiveSection();
    });

    /* --- 3. Highlight Active Section in Navigation --- */
    function highlightActiveSection() {
        let scrollPos = window.scrollY + 100; // Offset for header

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (section) {
                let sectionTop = section.offsetTop;
                let sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    /* --- 4. Smooth Scrolling for internal anchor links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- 5. FAQ Accordion --- */
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Close other open answers
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('open');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current answer
            this.classList.toggle('open');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    /* --- 6. Scroll Fade in Animation (Intersection Observer) --- */
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    /* --- 7. Render News Data (from news-data.js) --- */
    const newsList = document.getElementById('news-list');
    if (newsList && typeof newsData !== 'undefined') {
        const latestNews = newsData.slice(0, 5); // Get latest 5
        
        latestNews.forEach(item => {
            const newsItem = document.createElement(item.url ? 'a' : 'div');
            newsItem.className = 'news-item';
            if (item.url) newsItem.href = item.url;

            newsItem.innerHTML = `
                <span class="news-date">${item.date}</span>
                <span class="news-category ${item.categoryClass}">${item.category}</span>
                <span class="news-title">${item.title}</span>
            `;

            newsList.appendChild(newsItem);
        });
    }
    
    // Trigger initial check
    highlightActiveSection();
});
