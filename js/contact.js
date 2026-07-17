// // Contact formulier functionaliteit
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
//     const feedback = document.getElementById('formFeedback');

//     if (form) {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault();

//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const subject = document.getElementById('subject').value.trim();
//             const message = document.getElementById('message').value.trim();

//             // Validatie
//             if (!name || !email || !subject || !message) {
//                 alert('Vul alle velden in.');
//                 return;
//             }

//             // Toon feedback
//             feedback.textContent = 'Bericht verzonden! Je ontvangt een kopie op ' + email;
//             feedback.classList.add('show');

//             // Open mailclient met vooringevulde gegevens
//             const mailtoLink = `mailto:charissakalka@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`)}`;
//             window.open(mailtoLink, '_blank');

//             // Reset formulier na 5 seconden
//             setTimeout(() => {
//                 form.reset();
//                 feedback.classList.remove('show');
//             }, 5000);
//         });
//     }
// });