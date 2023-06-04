import React, { useEffect, useState } from 'react'
import {
  Grid,
  Typography,
  Container
} from '@mui/material'
import {
  BooksContainer, CardContainer, CardImage, GridImage
} from './books.styles.tsx'
import { getBooks } from '../../service/books/service.tsx'
import NoData from '../noData'
import ModalComponent from '../../components/modal'
import Loading from '../../components/loading'
import Search from '../../components/search'
import Pagination from '../../components/pagination/index.tsx'
import { Book } from '../../types/books.tsx';
import { concatData } from '../../utils/books/books.utils.tsx'



const initialBooks: Book[] = [];

const BooksTemplate: React.FC = () => {
  const [isSearching, setIsSearching] = useState(true)
  const [data, setData] =  useState<Book[]>(initialBooks)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataBook, setDataBook] = useState<Book>()
  const [modal, setModal] = useState(false)
  const [total, setTotal] = useState<number>()
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    setIsSearching(true)
    setData([])
    try {
        const data  = await getBooks(search, currentPage);
        setTotal(data.num_found);
        setData(data.docs);
        setIsSearching(false)
      } catch (error) {
        console.error(error);
        setIsSearching(false)
      }
  }

  const handleClick = (book: Book) => {
    setDataBook(book)
    setModal(true)
  }

  useEffect(() => {
    fetchData()
  }, [search, currentPage])
  
  return (
    <BooksContainer container>
      <Container maxWidth='xl'>
        <Grid container justifyContent='center'>
          <Search search={search} setSearch={setSearch}/>
        </Grid>
        <Grid container spacing={1} justifyContent='center' flexWrap='wrap'>
          {
            isSearching ? 
            (<Loading />) : 
            (data.length > 0 ? ( data.map((book) => (
              <Grid item xs={12} md={12} lg={12} key={book.cover_i} onClick={() => handleClick(book)}>
                <CardContainer>
                  <Grid display={'flex'}>
                    <GridImage item xs={2}>
                      <CardImage src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : '/book.jpg'} width={50} height={50} alt='img' />
                    </GridImage>
                    <Grid item xs={9}>
                      <Typography>{book.title}</Typography>
                      <div style={{ display: 'flex', marginTop: '10px' }}>
                        <Typography>Authors: {concatData(book.author_name)}</Typography>
                      </div>
                      <Typography>Year: {concatData(book.publish_year)}</Typography>
                    </Grid>
                  </Grid>
                </CardContainer>
              </Grid>
            ))) : ( <NoData />)) 
          }
      </Grid>
      {
        !isSearching && data.length > 0 &&
          <Grid item display={'flex'} justifyContent='center' flexWrap='wrap' style={{marginTop: '60px', marginBottom: '60px'}}>
            <Pagination totalItems={total} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </Grid>
      }
      <ModalComponent openModal={modal} setOpenModal={setModal} book={dataBook}/>
      </Container>
    </BooksContainer>
  )
}

export default BooksTemplate
