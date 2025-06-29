// Initialize Lucide icons
        lucide.createIcons();

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 80;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random size and position
                const size = Math.random() * 6 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay and duration
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
                
                // Random opacity
                particle.style.opacity = (Math.random() * 0.6 + 0.1).toString();
                
                particlesContainer.appendChild(particle);
            }
        }

        // Click sparks effect
        function createSpark(e) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            spark.style.left = e.clientX + 'px';
            spark.style.top = e.clientY + 'px';
            
            document.body.appendChild(spark);
            
            setTimeout(() => {
                if (document.body.contains(spark)) {
                    document.body.removeChild(spark);
                }
            }, 600);
        }

        // Smooth scrolling function
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Toggle mobile menu
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuBtn = document.getElementById('mobile-menu-btn');
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuBtn.innerHTML = '<i data-lucide="x" style="width: 24px; height: 24px;"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '<i data-lucide="menu" style="width: 24px; height: 24px;"></i>';
            }
            lucide.createIcons();
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Add click event listener for sparks
            document.addEventListener('click', createSpark);
            
            // Mobile menu toggle
            document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
            
            // Show desktop navigation on larger screens
            function updateNavigation() {
                const desktopNav = document.querySelector('.hidden.md\\:flex');
                if (window.innerWidth >= 768) {
                    if (desktopNav) {
                        desktopNav.style.display = 'flex';
                    }
                } else {
                    if (desktopNav) {
                        desktopNav.style.display = 'none';
                    }
                }
            }
            
            updateNavigation();
            window.addEventListener('resize', updateNavigation);
        });