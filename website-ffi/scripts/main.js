function toggleNav() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('show');
}

function copyUpiId() {
  const text = document.getElementById('upiIdText').innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert('UPI ID copied: ' + text))
    .catch(() => alert('Copy failed. Please copy manually.'));
}
