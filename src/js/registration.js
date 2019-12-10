$(document).on('click', '#btnSubmit', function (e) {
    e.preventDefault();
    registerUser();
});





const emails = {
    admin: 'admin@email.com',
    user: 'user@email.com'
}

const roles = {
    'admin': 'admin',
    'user' : 'user'
}


function checkParams() {
    const mail = $('.email').val();
    const pass = $('.password').val();

    if (mail.length != 0 && pass.length != 0) {
        $('#btnSubmit').removeAttr('disabled');
    } else {
        $('#btnSubmit').attr('disabled', 'disabled');
    }
}





const registerUser = function () {
    const mail = $('.email').val();
    const pass = $('.password').val();
    if (mail == emails.admin && pass.length >= 2 || mail == emails.user && pass.length >= 2) {
        if(mail==emails.admin){
            localStorage.setItem('role','admin');
            
        } else if(mail == emails.user){
            localStorage.setItem('role','user');
        }
        window.location.assign('news.html');
    }
    else {
        alert("email is not valid or password is too short");
    }

}


