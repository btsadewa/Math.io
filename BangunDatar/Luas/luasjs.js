// persegi panjang
const luasbtnpsgp = document.getElementById('luasbtnpsgp');
const luashpsgp = document.getElementById('luashpsgp');
const luasrpsgp = document.getElementById('luasrpsgp');

luasbtnpsgp.addEventListener('click', function() {
    const luaspanjang = parseInt(document.getElementById('luaspanjang').value);
    const luaslebar = parseInt(document.getElementById('luaslebar').value);

    luashpsgp.innerHTML = luaspanjang * luaslebar;
})

luasrpsgp.addEventListener('click', function() {
    const luaspanjang = document.getElementById('luaspanjang').value = ''
    const luaslebar = document.getElementById('luaslebar').value = ''
    luashpsgp.innerHTML = ''
})
// end persegi panjang


// segitiga
const luasbtnstg = document.getElementById('luasbtnstg');
const luashstg = document.getElementById('luashstg');
const luasrstg = document.getElementById('luasrstg');

luasbtnstg.addEventListener('click', function() {
    const luasalas = parseInt(document.getElementById('luasalas').value);
    const luastinggi = parseInt(document.getElementById('luastinggi').value);

    luashstg.innerHTML = (luasalas * luastinggi) / 2 ;
})

luasrstg    .addEventListener('click', function() {
    const luasalas = document.getElementById('luasalas').value = ''
    const luastinggi = document.getElementById('luastinggi').value = ''
    luashstg.innerHTML = ''
})
// endsegitiga

// persegi
const luasbtnpsg = document.getElementById('luasbtnpsg');
const luashpsg = document.getElementById('luashpsg');
const luasrpsg = document.getElementById('luasrpsg');

luasbtnpsg.addEventListener('click', function() {
    const luassisi = parseInt(document.getElementById('luassisi').value);

    luashpsg.innerHTML =  luassisi * luassisi
})

luasrpsg.addEventListener('click', function() {
    const luassisi = document.getElementById('luassisi').value = ''
    luashpsg.innerHTML = ''
})
// end persegi

// lingkaran
const luasbtnling = document.getElementById('luasbtnling');
const luasrling = document.getElementById('luasrling');
const luashling = document.getElementById('luashling');

luasbtnling.addEventListener('click', function() {
    const luasjari = parseInt(document.getElementById('luasjari').value);

    if(luasjari % 7 == 0) {
        luashling.innerHTML = 22/7 * luasjari * luasjari
    } else if (luasjari % 7 !== 0) {
        luashling.innerHTML = 3.14 * luasjari * luasjari
    }
})

luasrling.addEventListener('click', function() {
    const luasjari = document.getElementById('luasjari').value = ''
    luashling.innerHTML = ''
})
// end lingakran

// trapesium
const luasbtntrap = document.getElementById('luasbtntrap');
const luasrtrap = document.getElementById('luasrtrap');
const luashtrap = document.getElementById('luashtrap');

luasbtntrap.addEventListener('click', function() {
    const luassisia = parseInt(document.getElementById('luassisia').value);
    const luassisib = parseInt(document.getElementById('luassisib').value);
    const luasttrap = parseInt(document.getElementById('luasttrap').value);

    luashtrap.innerHTML = 0.5 * (luassisia + luassisib) * luasttrap
})

luasrtrap.addEventListener('click', function() {
    const luassisia = document.getElementById('luassisia').value = ''
    const luassisib = document.getElementById('luassisib').value = ''
    const luasttrap = document.getElementById('luasttrap').value = ''

    luashtrap.innerHTML = ''
})
// end trapesium

// luas layang
const luasbtnlay = document.getElementById('luasbtnlay');
const luasrlay = document.getElementById('luasrlay');
const luashlay = document.getElementById('luashlay');

luasbtnlay.addEventListener('click', function() {
    const luaslayd1 = parseInt(document.getElementById('luaslayd1').value);
    const luaslayd2 = parseInt(document.getElementById('luaslayd2').value);

    luashlay.innerHTML = 0.5 * luaslayd1 * luaslayd2;
})

luasrlay.addEventListener('click', function() {
    const luaslayd1 = document.getElementById('luaslayd1').value = ''
    const luaslayd2 = document.getElementById('luaslayd2').value = ''
    luashlay.innerHTML = ''
})
// end luas layang

// belah ketupat
const luasbtnbel = document.getElementById('luasbtnbel');
const luasrbel = document.getElementById('luasrbel');
const luashbel = document.getElementById('luashbel');

luasbtnbel.addEventListener('click', function() {
    const luasbkd1 = parseInt(document.getElementById('luasbkd1').value);
    const luasbkd2 = parseInt(document.getElementById('luasbkd2').value);
    
    luashbel.innerHTML = 0.5 * luasbkd1 * luasbkd2
})

luasrbel.addEventListener('click', function() {
    const luasbkd1 = document.getElementById('luasbkd1').value = ''
    const luasbkd2 = document.getElementById('luasbkd2').value = ''
    luashbel.innerHTML = ''
})
// end belah ketupat

// jajargenjang
const luasbtnjar = document.getElementById('luasbtnjar');
const luasrjar = document.getElementById('luasrjar');
const luashjar = document.getElementById('luashjar');

luasbtnjar.addEventListener('click', function() {
    const luasalasjg = parseInt(document.getElementById('luasalasjg').value);
    const luastinggijg = parseInt(document.getElementById('luastinggijg').value);

    luashjar.innerHTML = luasalasjg * luastinggijg;
})

luasrjar.addEventListener('click', function() {
    const luasalasjg = document.getElementById('luasalasjg').value = ''
    const luastinggijg = document.getElementById('luastinggijg').value = ''
    luashjar.innerHTML = ''
})
// end jajargenjang
// end luas