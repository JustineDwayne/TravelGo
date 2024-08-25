
const activeClick1 = function(name){

    document.getElementById('homeli').classList.remove('active');
    document.getElementById('bookli').classList.remove('active');
    document.getElementById('flightli').classList.remove('active');
    document.getElementById('hotelli').classList.remove('active');
    document.getElementById('actli').classList.remove('active');
    document.getElementById('contactli').classList.remove('active');
    document.getElementById(name).classList.add('active');

}
const activeClick2 = function(name){

    document.getElementById('homeli1').classList.remove('active');
    document.getElementById('bookli1').classList.remove('active');
    document.getElementById('flightli1').classList.remove('active');
    document.getElementById('hotelli1').classList.remove('active');
    document.getElementById('actli1').classList.remove('active');
    document.getElementById('contactli1').classList.remove('active');
    document.getElementById(name).classList.add('active');

}

mobiscroll.datepicker('#input-picker', {
    controls: ['calendar'],
    touchUi: true
});
