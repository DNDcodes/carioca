const phrases = [ 
    "[🔥] Carioca 00",
    "[🔥] Carioca 00",
    "[🔥] Carioca 00",
    "[🔥] Carioca 00",
    "[🔥] Carioca 00",
    "[🔥] Carioca 00" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);