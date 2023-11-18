let xal = prompt('xal');
let netice;

if (xal == 0) {
    netice = 'UDUZDUZ';
} else if (xal == 1) {
    netice = 'BAREBER';
} else if (xal == 3) {
    netice = 'SEN GAZANDIN';
}
else {
    netice = 'mumkun deil';
}

document.getElementById('xalaldi_sene').innerHTML = netice