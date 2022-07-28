let postArr = [];
let title = document.getElementById("post-title");
let body = document.getElementById("post-body");
const form = document.getElementById("new-post");
const articles = document.getElementById("articles");

function renderPosts() {
  let html = "";
  for (let post of postArr) {
    html += `
            <div class="article">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr class="line-through">
            </div>
        `;
  }
  articles.innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postArr = data.slice(0, 10);
    renderPosts();
  });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const titlePost = title.value;
  const bodyPost = body.value;
  const data = {
    title: titlePost,
    body: bodyPost,
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      postArr.unshift(data);
      renderPosts();
      form.reset();
    });
});
