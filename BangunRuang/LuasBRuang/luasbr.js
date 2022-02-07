// kubus
const luasbtnkubus = document.getElementById('luasbtnkubus');
const luashkubus = document.getElementById('luashkubus');
const luasrkubus = document.getElementById('luasrkubus');

luasbtnkubus.addEventListener('click', function() {
    const rusukkubus = parseInt(document.getElementById('rusukkubus').value);

    luashkubus.innerHTML = 6 * rusukkubus * rusukkubus;
})

luasrkubus.addEventListener('click', function() {
    const rusukkubus = document.getElementById('rusukkubus').value = ''
    luashkubus.innerHTML = ''
})
// end kubus


// balok
const luasbtnbalok = document.getElementById('luasbtnbalok');
const luashbalok = document.getElementById('luashbalok');
const luasrbalok = document.getElementById('luasrbalok');

luasbtnbalok.addEventListener('click', function() {
    const panjangbalok = parseInt(document.getElementById('panjangbalok').value);
    const luaslebarbalok = parseInt(document.getElementById('luaslebarbalok').value);
    const tinggibalok = parseInt(document.getElementById('tinggibalok').value);

    luashbalok.innerHTML = (2 * panjangbalok * luaslebarbalok) + (2 * panjangbalok * tinggibalok) + (2 * luaslebarbalok * tinggibalok) ;
})

luasrbalok.addEventListener('click', function() {
    const panjangbalok = document.getElementById('panjangbalok').value = ''
    const tinggigbalok = document.getElementById('tinggibalok').value = ''
    const luaslebarbalok = document.getElementById('luaslebarbalok').value = ''
    luashbalok.innerHTML = ''
})
// endbalok

// limas segiempat
const luasbtnl4 = document.getElementById('luasbtnl4');
const luashl4 = document.getElementById('luashl4');
const luasrl4 = document.getElementById('luasrl4');

luasbtnl4.addEventListener('click', function() {
    const luasl41 = parseInt(document.getElementById('luasl41').value);
    const luasl42 = parseInt(document.getElementById('luasl42').value);
    const luasl43 = parseInt(document.getElementById('luasl43').value);
    const luasl44 = parseInt(document.getElementById('luasl44').value);
    const luasl45 = parseInt(document.getElementById('luasl45').value);

    luashl4.innerHTML =  luasl41 +  luasl42 +  luasl43 +  luasl44 +  luasl45
})

luasrl4.addEventListener('click', function() {
    const luasl41 = document.getElementById('luasl41').value = ''
    const luasl42 = document.getElementById('luasl42').value = ''
    const luasl43 = document.getElementById('luasl43').value = ''
    const luasl44 = document.getElementById('luasl44').value = ''
    const luasl45 = document.getElementById('luasl45').value = ''
    luashl4.innerHTML = ''
})
// end limas segiempat

// limas segitiga
const luasbtnl3 = document.getElementById('luasbtnl3');
const luasrl3 = document.getElementById('luasrl3');
const luashl3 = document.getElementById('luashl3');

luasbtnl3.addEventListener('click', function() {
    const luasl31 = parseInt(document.getElementById('luasl31').value);
    const luasl32 = parseInt(document.getElementById('luasl32').value);
    const luasl33 = parseInt(document.getElementById('luasl33').value);
    const luasl34 = parseInt(document.getElementById('luasl34').value);

    luashl3.innerHTML = luasl31 + luasl32 + luasl33 + luasl34; 
})

luasrl3.addEventListener('click', function() {
    const luasl31 = document.getElementById('luasl31').value = ''
    const luasl32 = document.getElementById('luasl32').value = ''
    const luasl33 = document.getElementById('luasl33').value = ''
    const luasl34 = document.getElementById('luasl34').value = ''
    luashl3.innerHTML = ''
})
// end limas segtiga

// prisma segitiga
const luasbtnp3 = document.getElementById('luasbtnp3');
const luasrp3 = document.getElementById('luasrp3');
const luashp3 = document.getElementById('luashp3');

luasbtnp3.addEventListener('click', function() {
    const luasp31 = parseInt(document.getElementById('luasp31').value);
    const luasp32 = parseInt(document.getElementById('luasp32').value);
    const luasp33 = parseInt(document.getElementById('luasp33').value);
    const luasp3tp = parseInt (document.getElementById('luasp3tp').value);
    const luasp3s3 = parseInt(document.getElementById('luasp3s3').value);

    luashp3.innerHTML = (luasp31 + luasp32 + luasp33) * luasp3tp + (2 * luasp3s3)
})

luasrp3.addEventListener('click', function() {
    const luasp31 = document.getElementById('luasp31').value = ''
    const luasp32 = document.getElementById('luasp32').value = ''
    const luasp33 = document.getElementById('luasp33').value = ''
    const luasp3tp = document.getElementById('luasp3tp').value = ''
    const luasp3s3 = document.getElementById('luasp3s3').value = ''
    luashp3.innerHTML = ''
})
// end trapesium

// tabung
const luasbtntabung = document.getElementById('luasbtntabung');
const luasrtabung = document.getElementById('luasrtabung');
const luashtabung = document.getElementById('luashtabung');

luasbtntabung.addEventListener('click', function() {
    const luastjari = parseInt(document.getElementById('luastjari').value);
    const luasttinggi = parseInt(document.getElementById('luasttinggi').value);

    if(luastjari % 7 == 0 ) {
        luashtabung.innerHTML = 2 * 22/7 * luastjari * luasttinggi + 2 * 22/7 * luastjari * luastjari;
    } else if (luastjari % 7 !== 0 ) {
        luashtabung.innerHTML = 2 * 3.14 * luastjari * luasttinggi + 2 * 3.14 * luastjari * luastjari;
    }
})

luasrtabung.addEventListener('click', function() {
    const luastjari = document.getElementById('luastjari').value = ''
    const luasttinggi = document.getElementById('luasttinggi').value = ''
    luashtabung.innerHTML = ''
})
// end tabung

// kerucut
const luasbtnkerucut = document.getElementById('luasbtnkerucut');
const luasrkerucut = document.getElementById('luasrkerucut');
const luashkerucut = document.getElementById('luashkerucut');

luasbtnkerucut.addEventListener('click', function() {
    const luaskjari = parseInt(document.getElementById('luaskjari').value);
    const luaskpel = parseInt(document.getElementById('luaskpel').value);
    
    if (luaskjari % 7 == 0) {
        luashkerucut.innerHTML = 22/7 * luaskjari * luaskpel + 22/7 * luaskjari * luaskjari
    } else if (luaskjari % 7 !== 0) {
        luashkerucut.innerHTML = 3.14 * luaskjari * luaskpel + 3.14 * luaskjari * luaskjari
    }
})

luasrkerucut.addEventListener('click', function() {
    const luaskjari = document.getElementById('luaskjari').value = ''
    const luaskpel = document.getElementById('luaskpel').value = ''
    luashkerucut.innerHTML = ''
})
// end belah ketupat

// bola
const luasbtnbola = document.getElementById('luasbtnbola');
const luasrbola = document.getElementById('luasrbola');
const luashbola = document.getElementById('luashbola');

luasbtnbola.addEventListener('click', function() {
    const luasbjari = parseInt(document.getElementById('luasbjari').value);

    if (luasbjari % 7 == 0 ) {
        luashbola.innerHTML = 4 * 22/7 * luasbjari * luasbjari
    }else if (luasbjari % 7 !== 0 ) {
        luashbola.innerHTML = 4 * 3.14 * luasbjari * luasbjari
    }
})

luasrbola.addEventListener('click', function() {
    const luasbjari = document.getElementById('luasbjari').value = ''
    luashbola.innerHTML = ''
})
// end jajargenjang
// end luas