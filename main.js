document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120,
        easing: 'ease-out-cubic'
    });

    // Premium Accordion Logic
    document.querySelectorAll(".question").forEach(question => {
        const title = question.querySelector(".ques-title");
        title.addEventListener("click", () => {
            const isActive = question.classList.contains("active");
            
            // Close others
            document.querySelectorAll(".question").forEach(q => {
                if(q !== question) q.classList.remove("active");
            });

            // Toggle current
            question.classList.toggle("active");
        });
    });

    // Interactive Button Effects
    const buttons = document.querySelectorAll('button, .btns span');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05) translateY(-5px)';
            btn.style.filter = 'brightness(1.1)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1) translateY(0)';
            btn.style.filter = 'brightness(1)';
        });
    });

    // Form validation feedback
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = '0.3s';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});
