// we will cover promises, callbacks, async await
// async data - sth is going on but you don't want to wait until sth has happened for you to continue while its happened
const posts = [
     { title: "Post One", body: "This is post one"},
     { title: "Post Two", body: "This is post two"}
];

function getPosts() {
    setTimeout(() => {
     let output = '';
     posts.forEach((post) => {
          output += `<li>${post.title}</li>` 
     });
     document.body.innerHTML = output;
    }, 1000);
}
function createPost(post, callback) {
     setTimeout(() => {
          posts.push(post);
          callback(); // this is how we put the callback function
     }, 2000);
}