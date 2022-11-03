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

export const postComments = (commentBody, user, review_id) => {
  return axios
    .post(`${BASE_URL}/reviews/${review_id}/comments`, {
      username: user,
      body: commentBody,
    })
    .then(({ data }) => {
      return data;
    });
};

export const patchCommentVotes = async (comment_id, value) => {
  await axios.patch(`${BASE_URL}/reviews/${comment_id}`, { inc_votes: value });
};
export const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US");
};

export { fetchUsers, fetchReviews };
