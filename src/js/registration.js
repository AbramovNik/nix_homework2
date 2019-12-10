$(document).on('click', '#btnSubmit', function (e) {
    e.preventDefault();
    registerUser();
});





const emails = {
    admin: 'admin@email.com',
    user: 'user@email.com'
}

function checkParams() {
    const mail = $('#mail').val();
    const pass = $('#pass').val();

    if (mail.length != 0 && pass.length != 0) {
        $('#btnSubmit').removeAttr('disabled');
    } else {
        $('#btnSubmit').attr('disabled', 'disabled');
    }
}




const registerUser = function () {
    const mail = $('#mail').val();
    const pass = $('#pass').val();
    if (mail == emails.admin && pass.length >= 2 || mail == emails.user && pass.length >= 2) {
        if(mail==emails.admin){
            localStorage.setItem('userType',1);
            
        } else if(mail == emails.user){
            localStorage.setItem('userType',2);
        }
        window.location.assign('news.html');
    }
    else {
        alert("email is not valid or password is too short");
    }
}


