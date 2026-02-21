function makeHttpRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.send();

    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
    xhr.addEventListener("error", () => {
      reject("Error Occured: 'Request Failed'");
    });

  });
}

/* makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
  makeHttpRequest("GET", `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
      makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
          makeHttpRequest("GET", `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
            console.log(userData);
          })
        }
      );
    }
  );
}); */

makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((usersData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${usersData.users[0].id}`
    );
  })
  .then((postsData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/comments/post/${postsData.posts[0].id}`
    );
  })
  .then((commentsData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
    );
  })
  .then((userData) => {
    console.log(userData);
  })
  .catch((err) => {
    console.log(err);
  });
