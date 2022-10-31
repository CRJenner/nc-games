function fetchUsers() {
  return fetch(`https://chloes-project-nc-games.herokuapp.com/api/users`).then(
    (response) => {
      console.log(response);
      return response.json();
    }
  );
}

export { fetchUsers };
