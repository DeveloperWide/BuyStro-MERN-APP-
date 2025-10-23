import axios from 'axios'
import React from 'react'

const GetMe = () => {
    axios.get('/api/auth/me', {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {
        console.log(res)
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
