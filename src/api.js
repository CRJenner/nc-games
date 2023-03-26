import axios from "axios";
const BASE_URL = `https://chloe-jenner-nc-games-be.cyclic.app/api`;
const api = axios.create({ baseURL: BASE_URL });



export const fetchUsers = () => {
  return api.get(`/users`).then(({data}) => {
    console.log(data)
      return data.users
  })
}


export const fetchReviews = (sort_by) => {
  return api.get("/reviews", { params: { sort_by } }).then(({ data }) => {
    return data.reviews;
  });
};

// function fetchCategories() {
//   return fetch(
//     `https://chloe-jenner-nc-games-be.cyclic.app/api/categories`
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

export const removeComment = (comment_id) => {
  console.log(comment_id);
  return axios.delete(`${BASE_URL}/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};

export const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US");
};


