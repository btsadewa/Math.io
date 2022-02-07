//clear
document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#display').value = ''
})

//backspace
const backspace = () => {
    const num = document.querySelector('#display').value.slice(0, -1);
    document.querySelector('#display').value = num;
}

//satu
const satu = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "1"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '1'
    }
}

//dua
const dua = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "2"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '2'
    }
}

//tiga
const tiga = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "3"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '3'
    }
}

//empat
const empat = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "4"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '4'
    }
}

//lima
const lima = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "5"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '5'
    }
}

//enam
const enam = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "6"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '6'
    }
}

//tujuh
const tujuh = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "7"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '7'
    }
}

//delapan
const delapan = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "8"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '8'
    }
}

//sembilan
const sembilan = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "9"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '9'
    }
}

//nol
const nol = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "0"
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '0'
    }
}

//titik
const point = () => {
    if(document.querySelector('#display').value == "") {
        document.querySelector('#display').value = "."
    } else {
        document.querySelector('#display').value = document.querySelector('#display').value + '.'
    }
}