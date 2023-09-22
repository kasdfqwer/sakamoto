import React from 'react'
import { useNavigate } from 'react-router'

const AlbumCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/List/${item.id}`)
  }
  return (
    <>
      <div className="album-list" onClick={showDetail}>
        <div className="album-img"><img src={item?.img} alt=''/></div>
        <div className="text-area">
          <p className="title">{item?.title}</p>
          <p className="date">{item?.date}</p>
        </div>
      </div>
    </>
  )
}

export default AlbumCard
