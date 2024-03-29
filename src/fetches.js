export const FetchResumeData = () =>
  fetch('/resumeData.json')
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to fetch events'})
      }
      return response.json()
    })
    .catch(error => error)


