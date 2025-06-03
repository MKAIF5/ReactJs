import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { id } = useParams()

    return (
        <>
            <div>
                <h1 className='text-center text-white bg-gray-600
                p-4'>User : {id}</h1>
            </div>
        </>
    )
}

export default User
