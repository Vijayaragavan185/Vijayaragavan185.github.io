// All navigation, project disclosures and resume downloads work without JavaScript.
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('svijayaragavan185@gmail.com');
    copyStatus.textContent = 'Copied!';
  } catch {
    copyStatus.textContent = 'Select the email address above to copy it.';
  }
});

// Small, non-blocking entrance animations respect the visitor's motion preference.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.replace('is-pending', 'is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.project-card, .paper, .about-grid, .toolkit-grid > div').forEach(element => {
    element.classList.add('reveal', 'is-pending');
    observer.observe(element);
  });
}
