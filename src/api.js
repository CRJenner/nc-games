import axios from "axios";
const BASE_URL = `https://chloes-project-nc-games.herokuapp.com/api`;
const api = axios.create({ baseURL: BASE_URL });

// function fetchUsers() {
//   return fetch(`https://chloes-project-nc-games.herokuapp.com/api/users`).then(
//     (response) => {
//       return response.json();
//     }
//   );
// }

export const fetchReviews = (sort_by) => {
  return api.get("/reviews", { params: { sort_by } }).then(({ data }) => {
    return data.reviews;
  });
};

// function fetchCategories() {
//   return fetch(
//     `https://chloes-project-nc-games.herokuapp.com/api/categories`
//   ).then((response) => {
//     return response.json();
//   });
// }

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

//export { fetchUsers };
