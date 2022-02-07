// kubus
const volumebtnkubus = document.getElementById('volumebtnkubus');
const volumehkubus = document.getElementById('volumehkubus');
const volumerkubus = document.getElementById('volumerkubus');

volumebtnkubus.addEventListener('click', function() {
    const rusukkubus = parseInt(document.getElementById('rusukkubus').value);

    volumehkubus.innerHTML = rusukkubus * rusukkubus * rusukkubus;
})

volumerkubus.addEventListener('click', function() {
    const rusukkubus = document.getElementById('rusukkubus').value = ''
    volumehkubus.innerHTML = ''
})
// end kubus


// balok
const volumebtnbalok = document.getElementById('volumebtnbalok');
const volumehbalok = document.getElementById('volumehbalok');
const volumerbalok = document.getElementById('volumerbalok');

volumebtnbalok.addEventListener('click', function() {
    const panjangbalok = parseInt(document.getElementById('panjangbalok').value);
    const volumelebarbalok = parseInt(document.getElementById('volumelebarbalok').value);
    const tinggibalok = parseInt(document.getElementById('tinggibalok').value);

    volumehbalok.innerHTML = panjangbalok * volumelebarbalok * tinggibalok ;
})

volumerbalok.addEventListener('click', function() {
    const panjangbalok = document.getElementById('panjangbalok').value = ''
    const tinggigbalok = document.getElementById('tinggibalok').value = ''
    const volumelebarbalok = document.getElementById('volumelebarbalok').value = ''
    volumehbalok.innerHTML = ''
})
// endbalok

// limas segiempat
const volumebtnl4 = document.getElementById('volumebtnl4');
const volumehl4 = document.getElementById('volumehl4');
const volumerl4 = document.getElementById('volumerl4');

volumebtnl4.addEventListener('click', function() {
    const vluasalasl4 = parseInt(document.getElementById('vluasalasl4').value);
    const vtinggil4 = parseInt(document.getElementById('vtinggil4').value);

    volumehl4.innerHTML =  1/3 * vluasalasl4 * vtinggil4;
})

volumerl4.addEventListener('click', function() {
    const vluasalasl4 = document.getElementById('vluasalasl4').value = ''
    const vtinggil4 = document.getElementById('vtinggil4').value = ''
    volumehl4.innerHTML = ''
})
// end limas segiempat

// limas segitiga
const volumebtnl3 = document.getElementById('volumebtnl3');
const volumerl3 = document.getElementById('volumerl3');
const volumehl3 = document.getElementById('volumehl3');

volumebtnl3.addEventListener('click', function() {
    const vluasalasl3 = parseInt(document.getElementById('vluasalasl3').value);
    const vtinggil3 = parseInt(document.getElementById('vtinggil3').value);

    volumehl3.innerHTML = 1/3 * vluasalasl3 * vtinggil3; 
})

volumerl3.addEventListener('click', function() {
    const vluasalasl3 = document.getElementById('vluasalasl3').value = ''
    const vtinggil3 = document.getElementById('vtinggil3').value = ''
    volumehl3.innerHTML = ''
})
// end limas segtiga

// prisma segitiga
const volumebtnp3 = document.getElementById('volumebtnp3');
const volumerp3 = document.getElementById('volumerp3');
const volumehp3 = document.getElementById('volumehp3');

volumebtnp3.addEventListener('click', function() {
    const vluasalasp3 = parseInt(document.getElementById('vluasalasp3').value);
    const vtinggip3 = parseInt(document.getElementById('vtinggip3').value);

    volumehp3.innerHTML = 1/2 * vluasalasp3 * vtinggip3
})

volumerp3.addEventListener('click', function() {
    const vluasalasp3 = document.getElementById('vluasalasp3').value = ''
    const vtinggip3 = document.getElementById('vtinggip3').value = ''
    volumehp3.innerHTML = ''
})
// end trapesium

// tabung
const volumebtntabung = document.getElementById('volumebtntabung');
const volumertabung = document.getElementById('volumertabung');
const volumehtabung = document.getElementById('volumehtabung');

volumebtntabung.addEventListener('click', function() {
    const volumetjari = parseInt(document.getElementById('volumetjari').value);
    const volumettinggi = parseInt(document.getElementById('volumettinggi').value);

    if(volumetjari % 7 == 0 ) {
        volumehtabung.innerHTML = 22/7 * volumetjari * volumetjari * volumettinggi;
    } else if (volumetjari % 7 !== 0 ) {
        volumehtabung.innerHTML = 3.14 * volumetjari * volumetjari * volumettinggi;
    }
})

volumertabung.addEventListener('click', function() {
    const volumetjari = document.getElementById('volumetjari').value = ''
    const volumettinggi = document.getElementById('volumettinggi').value = ''
    volumehtabung.innerHTML = ''
})
// end tabung

// kerucut
const volumebtnkerucut = document.getElementById('volumebtnkerucut');
const volumerkerucut = document.getElementById('volumerkerucut');
const volumehkerucut = document.getElementById('volumehkerucut');

volumebtnkerucut.addEventListener('click', function() {
    const volumekjari = parseInt(document.getElementById('volumekjari').value);
    const volumetkerucut = parseInt(document.getElementById('volumetkerucut').value);
    
    if (volumekjari % 7 == 0) {
        volumehkerucut.innerHTML = 1/3 * 22/7 * volumekjari * volumekjari * volumetkerucut
    } else if (volumekjari % 7 !== 0) {
        volumehkerucut.innerHTML = 1/3 * 3.14 * volumekjari * volumekjari * volumetkerucut
    }
})

volumerkerucut.addEventListener('click', function() {
    const volumekjari = document.getElementById('volumekjari').value = ''
    const volumetkerucut = document.getElementById('volumetkerucut').value = ''
    volumehkerucut.innerHTML = ''
})
// end belah ketupat

// bola
const volumebtnbola = document.getElementById('volumebtnbola');
const volumerbola = document.getElementById('volumerbola');
const volumehbola = document.getElementById('volumehbola');

volumebtnbola.addEventListener('click', function() {
    const volumebjari = parseInt(document.getElementById('volumebjari').value);

    if (volumebjari % 7 == 0 ) {
        volumehbola.innerHTML = 4/3 * 22/7 * volumebjari * volumebjari
    }else if (volumebjari % 7 !== 0 ) {
        volumehbola.innerHTML = 4/3 * 3.14 * volumebjari * volumebjari
    }
})

volumerbola.addEventListener('click', function() {
    const volumebjari = document.getElementById('volumebjari').value = ''
    volumehbola.innerHTML = ''
})
// end jajargenjang
// end luas
