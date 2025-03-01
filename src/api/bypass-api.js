import { axiosInstance as axios, handleError } from '@/api/axios-instance';

/**
 * Returns a full list of bypasses.
 */
// eslint-disable-next-line import/prefer-default-export
export function getBypasses() {
  return axios.get('/bypasses')
    .then(({ data }) => data.records)
    .catch((error) => Promise.reject(handleError(error)));
}

export function getBypass(id) {
  return axios.get(`/bypasses/${id}`)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(handleError(error)));
}

export function createBypass(name, code, language) {
  return axios.post('/bypasses', { name, code, language })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(handleError(error)));
}

export function updateBypass(id, name, code, language) {
  return axios.put(`/bypasses/${id}`, { name, code, language })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(handleError(error)));
}

export function deleteBypass(id) {
  return axios.delete(`/bypasses/${id}`)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(handleError(error)));
}
