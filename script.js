fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 10);

    let html = "";

    for (let post of postsArr) {
      html += `
            <div class="article">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr class="line-through">
            </div>
            `;
    }

    const articles = document.getElementById("articles");
    articles.innerHTML = html;
  });
