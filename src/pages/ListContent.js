import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import AlbumCard from '../component/AlbumCard';
import NavBar from '../component/NavBar';

const ListContent = () => {
  const [album, setAlbum] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getAlbumDetail = async() => {
    let searchQuery = query.get('q')||""
    let url = `http://localhost:5000/album/${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setAlbum(data)
  }

  useEffect(() => {
    getAlbumDetail();
  }, [query])
  return (
    <div className='contwrap'>
      <NavBar/>
        <div className="contA">
          <div className="albumW">
            {
                album.map((menu, idx) => (
                    <div className='album-card' key={idx}>
                        <AlbumCard item={menu} />
                    </div>
                ))
            }
          </div>
        </div>
        {/* 한 개씩 출력(map) , menu - 임의의 인자값 배열 각각의 값, productcard에 출력 props를 통해 item={menu} */}
    </div>
  )
}

export default ListContent
