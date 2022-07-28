import React from 'react'
import Favorite from './Favorite'

const Card = ({ post }) => {
  return (
    <div className="bg-white rounded p-4 lg:py-6 lg:px-7 shadow-sm">
      <div className="w-full flex items-center justify-between">
        <span className="text-sm lg:text-base text-zinc-500">{post.date}</span>
        <span>
          <Favorite />
        </span>
      </div>

      <h2 className="mt-6 text-lg lg:text-2xl text-[#1A202C]">{post.title}</h2>
      <p className="mt-2 text-sm lg:text-lg text-[#717171]">{post.resume}</p>
    </div>
  )
}

export default Card
