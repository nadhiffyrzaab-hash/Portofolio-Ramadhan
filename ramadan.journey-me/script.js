const faders = document.querySelectorAll('.fade');

const appearOnScroll = new IntersectionObserver(
  function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".circle").forEach(circle => {
  let percent = circle.getAttribute("data-percent");
  let current = 0;

  let interval = setInterval(() => {
    if (current >= percent) {
      clearInterval(interval);
    } else {
      current++;
      circle.style.background =
        `conic-gradient(#22c55e ${current}%, #1f2937 ${current}%)`;
      circle.querySelector("span").textContent = current + "%";
    }
  }, 20);
});
setTimeout(() => {
  document.querySelectorAll(".skill").forEach(skill => {
    skill.classList.add("show");
  });
}, 1000);
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});