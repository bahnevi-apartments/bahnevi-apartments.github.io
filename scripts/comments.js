// const BASE_URL = 'https://comments-8f179.firebaseio.com/comments-bahnevi';
// var items = $('#items');
// var COMMENT_AUTHOR = $('#comment_author');
// var COMMENT = $('#comment');
// var foot = $('#footerLogo1');
// console.log(items);
// console.log(foot);
// $('#btnLoad').on('click', loadComments)
// $('#btnCreate').on('click', createComment);
//
// function loadComments() {
//     $.ajax({
//         method: "GET",
//         url: BASE_URL + '.json',
//     }).then(appendComment)
//         .catch(handleError)
// }
//
// function appendComment(comments) {
//     let keysLet = Object.keys(comments);
//     keysLet.sort((a, b) => comments[a].name.localeCompare(comments[b].name));
//     for (const id of keysLet) {
//         let li = $('<li>');
//         li.text(`${comments[id].name}: ${comments[id].comment}`);
//         let a = $('<button> Delete</button>');
//         a.on('click', function () {
//             $.ajax({
//                 method: "DELETE",
//                 url: BASE_URL + "/" + id + ".json"
//             }).then(function () {
//                 li.remove()
//             }).catch(handleError)
//         });
//         li.append(a);
//         items.append(li)
//     }
// }
//
// function createComment() {
//     let name = COMMENT_AUTHOR.val();
//     let phone = COMMENT.val();
//     if (name.trim() !== '' && phone.trim() !== '') {
//         $.ajax({
//             method: "POST",
//             url: BASE_URL + '.json',
//             data: JSON.stringify({name, phone})
//         }).then(function () {
//             COMMENT_AUTHOR.val("");
//             COMMENT.val("")
//         }).catch(handleError)
//     }
// }
//
// function handleError(err) {
//     console.log(err)
// }