import axios from 'axios'
import React from 'react'
import { getToken } from '../utils/helper.js'

const GetMe = () => {
    axios.get('/api/auth/me', {
        headers: {
            Authorization: `bearer ${getToken()}`
        }
    }).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
  return (
    <div>
      Get ME
    </div>
  )
}

export default GetMe
