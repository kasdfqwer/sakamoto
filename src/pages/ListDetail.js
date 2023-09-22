import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ListDetail = () => {
  const {id} = useParams();
  const [album, setAlbum] = useState([null]);
  const getAlbumDetail = async() => {
    let url = `http://localhost:5000/album/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setAlbum(data)
  }

  useEffect(() => {
    getAlbumDetail();
  }, [])
  return (
    <>
     <div className="detail-area">
        <div className="img-area">
            <img src={album?.img} alt="" />
        </div>
        <div className="txt-area">
            <p className="title">{album?.title}</p>
            <p className="date">{album?.date}</p>
            <p className="about-this">{album?.about}</p>
            <a href={album?.play} className='go-play'></a>
        </div>
     </div>
    </>
  )
}

export default ListDetail