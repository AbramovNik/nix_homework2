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
    $(this).parents('.news').remove();
});

$(document).on('click', '.edit', function () {
    const title = $(this).parents('.news').find('.title').text();
    const content = $(this).parents('.news').find('.content').text();
    $(this).parents('.news').append(
        `<div class = 'edit-modal'>
        <div class = 'modal-header'>
        <div class  = 'btn-wrapp'><button class='close-modal'>X</button></div>
        <strong>Title</strong>
        <input class = 'input-edit' value = ' ${title}'>
        </div>
        <div class = 'modal-body'>
        <strong>Content</strong>
        <textarea class = 'textarea-edit' cols='30' rows= '10'>${content}</textarea>
        </div>
        <div class = 'btn-wrapp'>
        <button class = 'edit-post'>Edit</button>
        </div>
        </div>`
        
    );

    const editPost = function(){
        const editTitle = $('.input-edit').val();
        const editContent = $('.textarea-edit').val();
        $(this).parents('.news').find('.title').text(editTitle);
        $(this).parents('.news').find('.content').text(editContent);
        $(this).parents('.news').find('.edit-modal').remove();
    
    }

    const closeModal = function(){
        $(this).parents('.news').find('.edit-modal').remove();
    }

    $('.close-modal').on('click', closeModal);

    $('.edit-post').on('click', editPost);
    
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
    $('#openModal').removeClass('modal-open');
    $('.news-list').append(`<div class = 'news'>
    <div class = 'content-wrapp'>
 <strong class = 'title'>${title}</strong>
 <p class = 'content'>${content}</p>
 </div>
 <div class = btn-wrapp>
 <button class = 'edit'>edit</button>
 <button class = 'delete'>delete</button>
 </div>
 </div>`);
 $('#title').val('');
 $('#content').val('');
}


