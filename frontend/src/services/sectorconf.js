import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/sectorconf'


const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const create = async newObject => {
  let token = localStorage.getItem('token')
  if (!token) token = ''
  const config = {
    headers: {
      'Authorization': 'bearer ' + token
    }
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, remove, update }
