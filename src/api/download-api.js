import { axiosInstance as axios, handleError } from '@/api/axios-instance';
import qs from 'qs';

function getFilename(contentDisposition) {
  // need to handle filename="filename.jpg" and filename*=UTF-8''filename.jpg
  if (contentDisposition.indexOf('filename*=') !== -1) {
    return decodeURIComponent(contentDisposition.split('filename*=')[1].split("'")[2]);
  }

  let filename = contentDisposition.split('filename=')[1];
  filename = filename.replace(/^["']|["']$/g, '');

  return filename;
}

export function getDownloads({
  page, limit, sortBy = 'updated_at', sortOrder = 'desc', query, sources,
}) {
  return axios.get('/downloads', {
    params: {
      page,
      limit,
      query,
      sources,
      order_by: sortBy,
      order_direction: sortOrder,
    },
    paramsSerializer: (p) => qs.stringify(p, { arrayFormat: 'repeat', skipNulls: true }),
  })
    .then((response) => response.data)
    .catch((error) => Promise.reject(handleError(error)));
}

export function createDownload(data) {
  return axios({
    method: 'post',
    url: '/downloads',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export function getDownload(id) {
  return axios.get(`/downloads/${id}/download`, { responseType: 'blob' })
    .then((response) => {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const filename = getFilename(response.headers['content-disposition']);
      console.warn(filename);
      console.warn(response.headers['content-disposition']);

      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => Promise.reject(handleError(error)));
}

export function getDownloadAsUrl(id) {
  return axios.get(`/downloads/${id}/download`, { responseType: 'blob' })
    .then((response) => {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      return url;
    })
    .catch((error) => Promise.reject(handleError(error)));
}

export function getDownloadAsText(id) {
  return axios.get(`/downloads/${id}/download`, { responseType: 'text' })
    .then((response) => response.data)
    .catch((error) => Promise.reject(handleError(error)));
}
