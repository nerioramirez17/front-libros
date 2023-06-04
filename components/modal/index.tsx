import React, { SetStateAction, Dispatch } from 'react' 
import { Typography } from '@mui/material'
import Image from 'next/image'
import Modal from '@mui/material/Modal'
import { BoxModal } from './modal.styles'
import { Book } from '../../types/books.tsx';
import { concatData } from '../../utils/books/books.utils.tsx'

const ModalComponent: React.FC<{ openModal: boolean, setOpenModal: Dispatch<SetStateAction<boolean>>, book: Book }> = ({ openModal, setOpenModal, book }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <BoxModal color="black">
          <Image src={book?.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : '/book.jpg'} width={190} height={190} alt='img' />
          <Typography>{book?.title}</Typography>
          <Typography>Year: {concatData(book.publish_year)}</Typography>
          <Typography>Aqui deberia ir una descripcion del libro</Typography>
          <Typography>Aqui deberia ir una descripcion del autor</Typography>
        </BoxModal>
      </Modal>
    </>

  )
}

export default ModalComponent
