import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results'
import Pagination from './components/Pagination';
import './App.css'

function App() {
  const defaultKeyword = [
    'flower',
    'animal',
    'photo',
    'house',
    'restaurant',
    'food'
  ];
  const randomKeyword = defaultKeyword[
    Math.floor(Math.random()*defaultKeyword.length)
  ];

  const [keyword, setKeyword] = useState(randomKeyword);
  const [photo, setPhoto] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPage, setTotalPage] = useState('');

  const baseUrl = "https://api.unsplash.com/search/photos";

  const getPhotoData = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`
        },
        params: {
          query: keyword,
          page: pageCount,
          per_page: 30
        }
      };

      const res = await axios.get(baseUrl, options);

      setPhoto(res.data.results);
      setTotalPage(res.data.total_pages);
    } catch (err) {
      alert('Error!');
    }
  }

  useEffect(() => {
    getPhotoData();
  }, [keyword, pageCount]); // 依存配列に keyword と pageCount を追加

  const searchPhoto = (e) => {
    e.preventDefault();
    setPageCount(1);
  }

  const pageIncrement = () => {
    setPageCount(pageCount + 1);
  }

  const pageDecrement = () => {
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
    }
  }

  return (
    <div className="App">
      <Title />
      <Form setKeyword={setKeyword} searchPhoto={searchPhoto} keyword={keyword} />
      <Results photo={photo} />
      <Pagination
        pageIncrement={pageIncrement}
        pageDecrement={pageDecrement}
        pageCount={pageCount}
        totalPage={totalPage}
      />
    </div>
  )
}

export default App;
