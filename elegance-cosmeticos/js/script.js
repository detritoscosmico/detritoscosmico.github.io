const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = currentYear;
}

const whatsappNumber = '5500000000000';
const instagramUser = '@elegancecosmeticosbr';

function buildWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

console.log('Elegance Cosméticos carregado com sucesso.');
console.log(`Instagram oficial configurado: ${instagramUser}`);
