const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = currentYear;
}

const whatsappNumber = '5531995170249';
const instagramUser = '@elegancecosmeticosbr';

function buildWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

console.log('Elegance Cosméticos carregado com sucesso.');
console.log(`Instagram oficial configurado: ${instagramUser}`);
