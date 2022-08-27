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
     const post = document.getElementById("posts");
     post.innerHTML = output;
     // document.post.innerHTML = output;
    }, 1000);
}
function createPost(post) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               posts.push(post);
               
               const error = false;
               if (!error){
                    resolve();
               } else{
                    reject("Error: Something went wrong");
               }
          }, 2000);
     });
}

async function init() {
     // waiting for createPost to be done then call the getposts
	await createPost({ title: "Post Three", body: "This is post three"});
     getPosts();
}
init();

async function fetchUsers(params) {
     const res = await fetch("https://someurl/...");
     const data = await res.json();
     console.log(data);
}
// fetchUsers();