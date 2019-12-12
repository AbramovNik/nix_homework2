// const news = [];





// $(document).on('click', '#open-modal', function () {
//     openModal();
// });

// $(document).on('click', '#close-modal', function () {
//     closeModal();
// });

// $(document).on('click', '#publicate', function () {
//     publicatePost();
// });

// $(document).on('click', '.delete', function () {
//     $(this).parents('.news').remove();
// });

// $(document).on('click', '.edit', function () {
//     const title = $(this).parents('.news').find('.title').text();
//     const content = $(this).parents('.news').find('.content').text();
//     $(this).parents('.news').append(
//         `<div class = 'edit-modal'>
//         <div class = 'modal-header'>
//         <div class  = 'btn-wrapp'><button class='close-modal'>X</button></div>
//         <strong>Title</strong>
//         <input class = 'input-edit' value = ' ${title}'>
//         </div>
//         <div class = 'modal-body'>
//         <strong>Content</strong>
//         <textarea class = 'textarea-edit' cols='30' rows= '10'>${content}</textarea>
//         </div>
//         <div class = 'btn-wrapp'>
//         <button class = 'edit-post'>Edit</button>
//         </div>
//         </div>`

//     );

//     const editPost = function () {
//         const editTitle = $('.input-edit').val();
//         const editContent = $('.textarea-edit').val();
//         $(this).parents('.news').find('.title').text(editTitle);
//         $(this).parents('.news').find('.content').text(editContent);
//         $(this).parents('.news').find('.edit-modal').remove();

//     }

//     const closeModal = function () {
//         $(this).parents('.news').find('.edit-modal').remove();
//     }

//     $('.close-modal').on('click', closeModal);

//     $('.edit-post').on('click', editPost);

// });



// const openModal = function () {
//     $('#openModal').addClass('modal-open');
// }

// const closeModal = function () {
//     $('#openModal').removeClass('modal-open');
//     $('#title').val('');
//     $('#content').val('');


// }



// const logOut = function() {
//     window.location.assign('index.html');
//     localStorage.removeItem('role');
// }

// $(document).on('click', '.logout', function () {
//     logOut();
// });

// function checkPost() {
//     const title = $('#title').val();
//     const content = $('#content').val();
//     if (title.length !== 0 && content.length !== 0) {
//         $('#publicate').removeAttr('disabled');
//     } else {
//         $('#publicate').attr('disabled', 'disabled');
//     }
// }


// const publicatePost = function () {
//     const title = $('#title').val();
//     const content = $('#content').val();
//     news.push({ 'title': title, 'content': content });
//     console.log(news);
//     localStorage.setItem('news', JSON.stringify(news));
//     $('#openModal').removeClass('modal-open');
//     $('.news-list').append(`<div class = 'news'>
//     <div class = 'content-wrapp'>
//  <strong class = 'title'>${title}</strong>
//  <p class = 'content'>${content}</p>
//  </div>
//  <div class = btn-wrapp>
//  <button class = 'edit'>edit</button>
//  <button class = 'delete'>delete</button>
//  </div>
//  </div>`);
//     $('#title').val('');
//     $('#content').val('');
// }


// const renderTemplate = function () {
//     return (
//         $('.news-list').append(
//             `<div class = news>
//          <div class = 'content-wrapp'>
//          <strong class = 'title'>${title}</strong>
//         <p class = 'content'>${content}</p>
//         <div class = btn-wrapp>
//         <button class = 'edit'>edit</button>
//         <button class = 'delete'>delete</button>
//         </div>
//          </div>
//          </div>`
//         )
//     )
// }


const news = [];


document.addEventListener('DOMContentLoaded', function () {
    const btnAddAtricle = $('.js-add-news');
    btnAddAtricle.on('click', addArticle);
    const btnModalClose = $('.js-close-modal');
    btnModalClose.on('click', closeModal);
    const publicate = $('.js-publicate');
    publicate.on('click', publicateArticle);
    if(news.length !=0){
    renderArticle();
    }else{
        newsList.insertAdjacentHTML('beforeend', '<p>There are no articles here</p>');
    }
    console.log(localStorage.getItem('articles', news))
})



function openModal() {
    $('.modal').addClass('modal-open');
}

function closeModal() {
    $('.modal').removeClass('modal-open');
}


function addArticle() {
    openModal();
}

function checkPost() {
    const title = $('.js-title').val();
    const content = $('.js-content').val();
    if (title.length !== 0 && content.length !== 0) {
        $('.js-publicate').removeAttr('disabled');
    } else {
        $('.js-publicate').attr('disabled', 'disabled');
    }
}


function publicateArticle() {
    const title = $('.js-title').val();
    const content = $('.js-content').val();
    const id = Math.round((Math.random() * 10 ** 7), 0);
    news.push({ 'title': title, "content": content })
    localStorage.setItem('articles', JSON.stringify(news));
    $('.js-title').val('');
    $('.js-content').val('');
    closeModal();
    renderArticle(title, content, id);
}


function renderArticle(title, content, id) {
    let article =
        `<div class = 'article' data-id = '${id}'>
        <div class = 'article-header'>${title}</div>
        <div class = 'article-body'>${content}</div>
        <div class = 'article-footer'>
        <button class = 'js-edit-article'>Edit</button>
        <button class = 'js-delete-article'>Delete</button>
        </div>
        </div>`
        const newsList = document.querySelector('.news-list');

    console.log(newsList)
    newsList.insertAdjacentHTML('beforeend', article);

}