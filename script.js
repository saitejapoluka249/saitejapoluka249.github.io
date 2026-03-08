function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* arrow onclick scroll down */
document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow");

  arrow.addEventListener("click", () => {
    const scrollDistance = window.innerHeight;
    window.scrollBy(0, scrollDistance);
  });
});

// bottom to top button script

$(document).ready(function () {
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
});

// ==========================================
// DARK MODE / LIGHT MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// 1. Check if the user already chose Dark Mode in a previous visit
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun'); // Switch to Sun icon
}

// 2. Listen for clicks on the toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is now active
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Show Sun
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Show Moon
        localStorage.setItem('theme', 'light'); // Save preference (Default)
    }
});

// ==========================================
// TIMELINE TABS LOGIC
// ==========================================
const tabs = document.querySelectorAll('.timeline-tab');
const panels = document.querySelectorAll('.timeline-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        const targetPanel = document.getElementById(`${tab.dataset.tab}-panel`);
        targetPanel.classList.add('active');
    });
});

// ==========================================
// TIMELINE ACCORDION LOGIC
// ==========================================
function toggleTimeline(headerElement) {
    const card = headerElement.closest('.timeline-card');
    const details = card.querySelector('.timeline-details');
    
    // Toggle the 'open' class for arrow rotation
    card.classList.toggle('open');
    
    // Animate the height smoothly
    if (card.classList.contains('open')) {
        details.style.maxHeight = details.scrollHeight + "px";
    } else {
        details.style.maxHeight = "0px";
    }
}