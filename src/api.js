import axios from "axios";

function fetchUsers() {
  return fetch(`https://chloes-project-nc-games.herokuapp.com/api/users`).then(
    (response) => {
      return response.json();
    }
  );
}

function fetchReviews() {
  return fetch(
    `https://chloes-project-nc-games.herokuapp.com/api/reviews`
  ).then((response) => {
    return response.json();
  });
}

// function fetchCategories() {
//   return fetch(
//     `https://chloes-project-nc-games.herokuapp.com/api/categories`
//   ).then((response) => {
//     return response.json();
//   });
// }

const BASE_URL = `https://chloes-project-nc-games.herokuapp.com/api`;

export const patchVoteCounts = async (review_id, value) => {
  await axios.patch(`${BASE_URL}/reviews/${review_id}`, { inc_votes: value });
};

export const getComments = async (review_id) => {
  const { data } = await axios.get(`${BASE_URL}/reviews/${review_id}/comments`);
  return data;
};

export { fetchUsers, fetchReviews };
