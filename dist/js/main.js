$(document).on('click', '#open-modal', function () {
    openModal();
});

$(document).on('click', '#close-modal', function () {
    closeModal();
});

$(document).on('click', '#publicate', function () {
    publicatePost();
});

$(document).on('click', '.delete', function () {
    deletePost();
});

const openModal = function () {
    $('#openModal').addClass('modal-open');
}

const closeModal = function () {
    $('#openModal').removeClass('modal-open');
    $('#title').val('');
    $('#content').val('');
}



function checkPost() {
    const title = $('#title').val();
    const content = $('#content').val();
    if (title.length !== 0 && content.length !== 0) {
        $('#publicate').removeAttr('disabled');
    } else {
        $('#publicate').attr('disabled', 'disabled');
    }
}


const publicatePost = function () {
    const title = $('#title').val();
    const content = $('#content').val();
    console.log(title, content);
    $('#openModal').removeClass('modal-open');
    $('.news-list').append(`<div class = 'news'>
 <strong class = 'title'>${title}</strong>
 <div class = btn-wrapp>
 <button class = 'edit'>edit</button>
 <button class = 'delete'>delete</button>
 </div>
 <p class = 'content'>${content}</p>
 </div>`);
 $('#title').val('');
 $('#content').val('');
}

const deletePost = function(){
console.log($(this));
console.log("dsdasas");
console.log("sdjaslasjk")
}
$(document).on('click', '#btnSubmit', function (e) {
    e.preventDefault();
    e.stopPropagation();
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
        window.location.href = 'news.html';
    }
    else {
        alert("email is not valid or password is too short");
    }
}


