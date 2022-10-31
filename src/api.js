function fetchUsers() {
  return fetch(`https://chloes-project-nc-games.herokuapp.com/api/users`).then(
    (response) => {
      return response.json();
    }
  );
}

export { fetchUsers };
