export const getGames = () => (dispatch, getState) => {
  const USER = getState().auth.currentUser.id;
  return fetch(`${API_BASE_URL}/pets/${USER}`, {
    method: 'GET',
    headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${authToken}`,
    },
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
  .then(({ pets }) => dispatch(fetchPetSuccess(pets)))
  .catch((err) => {
    const { reason, message, location } = err;
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message,
        }),
      );
    }
  });
};