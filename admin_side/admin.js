

function sidebar(name) {
    if (name === 'dashboard'){
        document.getElementById('dash-div').style.display = 'block';
        document.getElementById('flights-div').style.display = 'none';
        document.getElementById('hotels-div').style.display = 'none';
        document.getElementById('bookings-div').style.display = 'none';
        document.getElementById('admins-div').style.display = 'none';
        document.getElementById('users-div').style.display = 'none';
    } else if ( name === 'flights'){
        document.getElementById('dash-div').style.display = 'none';
        document.getElementById('flights-div').style.display = 'block';
        document.getElementById('hotels-div').style.display = 'none';
        document.getElementById('bookings-div').style.display = 'none';
        document.getElementById('admins-div').style.display = 'none';
        document.getElementById('users-div').style.display = 'none';

    } else if ( name === 'hotels'){
        document.getElementById('dash-div').style.display = 'none';
        document.getElementById('flights-div').style.display = 'none';
        document.getElementById('hotels-div').style.display = 'block';
        document.getElementById('bookings-div').style.display = 'none';
        document.getElementById('admins-div').style.display = 'none';
        document.getElementById('users-div').style.display = 'none';
       
    } else if ( name === 'bookings'){
        document.getElementById('dash-div').style.display = 'none';
        document.getElementById('flights-div').style.display = 'none';
        document.getElementById('hotels-div').style.display = 'none';
        document.getElementById('bookings-div').style.display = 'block';
        document.getElementById('admins-div').style.display = 'none';
        document.getElementById('users-div').style.display = 'none';
            
    } else if ( name === 'admins'){
        document.getElementById('dash-div').style.display = 'none';
        document.getElementById('flights-div').style.display = 'none';
        document.getElementById('hotels-div').style.display = 'none';
        document.getElementById('bookings-div').style.display = 'none';
        document.getElementById('admins-div').style.display = 'block';
        document.getElementById('users-div').style.display = 'none';
        
    } else if ( name === 'users'){
        document.getElementById('dash-div').style.display = 'none';
        document.getElementById('flights-div').style.display = 'none';
        document.getElementById('hotels-div').style.display = 'none';
        document.getElementById('bookings-div').style.display = 'none';
        document.getElementById('admins-div').style.display = 'none';
        document.getElementById('users-div').style.display = 'block';
    }
        
  


 }

 function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}
   
function acclink(name) {
    if (name === 'admins_acc') {
        document.getElementById('admins_acc').style.display = 'block';
        document.getElementById('users_acc').style.display = 'none';
    } else if (name === 'users_acc') {
        document.getElementById('admins_acc').style.display = 'none';
        document.getElementById('users_acc').style.display = 'block';
    }
}



    





