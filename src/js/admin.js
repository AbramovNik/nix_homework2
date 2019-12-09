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