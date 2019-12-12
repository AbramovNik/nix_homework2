document.addEventListener('DOMContentLoaded', function () {
    const btnSubmit = $('.btnSubmit');
    btnSubmit.on('click', userLogin);

    const emails = {
        admin: 'admin@email.com',
        user: 'user@email.com'
    }

    const roles = {
        admin: 'admin',
        user: 'user'
    }

    function userLogin(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();

        if (email == emails.admin) {
            localStorage.setItem('role', roles.admin)
        } else if (email == emails.user) {
            localStorage.setItem('role', roles.user);
        }
        window.location.assign('news.html');
    }
})


function checkInput() {
    const email = $('#email').val();
    const password = $('#password').val();
    if (email.length != 0 && password.length != 0) {
        $('.btnSubmit').removeAttr('disabled');
    } else {
        $('.btnSubmit').attr('disabled', 'disabled');
    }
}







