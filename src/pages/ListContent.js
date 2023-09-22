import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import AlbumCard from '../component/AlbumCard';

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
    <Container>
        {
            album.map((menu, idx) => (
                <div key={idx}>
                    <AlbumCard item={menu} />
                </div>
            ))
        }
        {/* 한 개씩 출력(map) , menu - 임의의 인자값 배열 각각의 값, productcard에 출력 props를 통해 item={menu} */}
    </Container>
  )
}

export default ListContent
