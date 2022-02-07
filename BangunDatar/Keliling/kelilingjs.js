// persegi panjang
const btnpsgp = document.getElementById('btnpsgp');
const hpsgp = document.getElementById('hpsgp');
const rpsgp = document.getElementById('rpsgp');

btnpsgp.addEventListener('click', function() {
    const panjang = parseInt(document.getElementById('panjang').value);
    const lebar = parseInt(document.getElementById('lebar').value);

    hpsgp.innerHTML = 2 * (panjang + lebar);
})

rpsgp.addEventListener('click', function() {
    const panjang = document.getElementById('panjang').value = ''
    const lebar = document.getElementById('lebar').value = ''
    hpsgp.innerHTML = ''
})

// end persegi panjang

//segitiga
const btnstg = document.getElementById('btnstg');
const hstg = document.getElementById('hstg');
const rstg = document.getElementById('rstg');

btnstg.addEventListener('click', function(){
   const sga = parseInt(document.getElementById('sga').value);
   const sgb = parseInt(document.getElementById('sgb').value);
   const sgc = parseInt(document.getElementById('sgc').value)

   hstg.innerHTML = sga + sgb+ sgc 
})

rstg.addEventListener('click', function() {
   const sga = document.getElementById('sga').value = ""
   const sgb = document.getElementById('sgb').value = ""
   const sgc = document.getElementById('sgc').value = ""
    hstg.innerHTML = ''
})
// end segitiga

// persegi
const btnpsg = document.getElementById('btnpsg');
const hpsg = document.getElementById('hpsg');
const rpsg = document.getElementById('rpsg');

btnpsg.addEventListener('click', function() {
    const sisi = parseInt(document.getElementById('sisi').value);

    hpsg.innerHTML = sisi * 4
})

rpsg.addEventListener('click', function() {
    const sisi = document.getElementById('sisi').value = ''
    hpsg.innerHTML = ''
})
//end persegi

//lingkaran
const btnling = document.getElementById('btnling');
const rling = document.getElementById('rling');
const hling = document.getElementById('hling');

btnling.addEventListener('click', function() {
    const jari = parseInt(document.getElementById('jari').value);

    if(jari % 7 == 0) {
        hling.innerHTML = 2 * 22/7 * jari
    } else if (jari % 7 !== 0) {
        hling.innerHTML = 2 * 3.14 *jari
    }
})

rling.addEventListener('click', function() {
    const jari = document.getElementById('jari').value = ''
    hling.innerHTML = ''
})
//end lingkaran

//trapesium
const btntrap = document.getElementById('btntrap');
const rtrap = document.getElementById('rtrap');
const htrap = document.getElementById('htrap');

btntrap.addEventListener('click', function() {
    const sisia = parseInt(document.getElementById('sisia').value);
    const sisib = parseInt(document.getElementById('sisib').value);
    const sisic = parseInt(document.getElementById('sisic').value);
    const sisid = parseInt(document.getElementById('sisid').value);

    htrap.innerHTML = sisia + sisib + sisic + sisid
})

rtrap.addEventListener('click', function() {
    const sisia = document.getElementById('sisia').value = ''
    const sisib = document.getElementById('sisib').value = ''
    const sisic = document.getElementById('sisic').value = ''
    const sisid = document.getElementById('sisid').value = ''

    htrap.innerHTML = ''
})
//end trapesium


//jajrgernjang
const btnjar = document.getElementById('btnjar');
const rjar = document.getElementById('rjar');
const hjar = document.getElementById('hjar');

btnjar.addEventListener('click', function() {
    const sisimiring = parseInt(document.getElementById('sisimiring').value);
    const sisilurus = parseInt(document.getElementById('sisilurus').value);

    hjar.innerHTML = 2 * (sisimiring + sisilurus);
})

rjar.addEventListener('click', function() {
    const sisimiring = document.getElementById('sisimiring').value = ''
    const sisilurus = document.getElementById('sisilurus').value = ''
    hjar.innerHTML = ''
})
//end jajrgenjang

//layang
const btnlay = document.getElementById('btnlay');
const rlay = document.getElementById('rlay');
const hlay = document.getElementById('hlay');

btnlay.addEventListener('click', function() {
    const sisipanjang = parseInt(document.getElementById('sisipanjang').value);
    const sisipendek = parseInt(document.getElementById('sisipendek').value);

    hlay.innerHTML = 2 * (sisipanjang + sisipendek);
})

rlay.addEventListener('click', function() {
    const sisipanjang = document.getElementById('sisipanjang').value = ''
    const sisipendek = document.getElementById('sisipendek').value = ''
    hlay.innerHTML = ''
})
//end layang

//belah ketupat
const btnbel = document.getElementById('btnbel');
const rbel = document.getElementById('rbel');
const hbel = document.getElementById('hbel');

btnbel.addEventListener('click', function() {
    const bksisi = parseInt(document.getElementById('bksisi').value);

    hbel.innerHTML = 4 * bksisi
})

rbel.addEventListener('click', function() {
    const bksisi = document.getElementById('bksisi').value = ''
    hbel.innerHTML = ''
})
//end belah ketupat



