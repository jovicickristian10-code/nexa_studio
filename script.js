document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = "Zdravo Nexa Studio, ja sam " + name + ". Želim da zatražim ponudu.";
    
    // Automatski preusmjerava na WhatsApp jer je to najbrži "backend" za početak
    window.open(`https://wa.me/38765959096?text=${encodeURIComponent(message)}`, '_blank');
    
    alert("Hvala " + name + "! Preusmjeravamo vas na WhatsApp za brži odgovor.");
});
