import RenderModal from './RenderModal'
/* import { changeModal } from '../../store/actions' */
import { NormalButton } from '../buttons'
import { useSelector } from 'react-redux'
import { RootState, store } from '../../store/store'
import { changeModal } from '../../store/slices/slices'

const GlobalModal = () => {
  const { modalReducer } = useSelector((state: RootState) => state.global)

  function handelModal() {
    store.dispatch(
      changeModal({
        status: !modalReducer.status,
        butttonText: '',
        title: '',
        contentModal: '',
        width: null,
        onClick: undefined,
      }),
    )
  }
  function handelButtonModal() {
    modalReducer.onClick!()
    store.dispatch(
      changeModal({
        status: !modalReducer.status,
        butttonText: '',
        title: '',
        contentModal: '',
        width: null,
        onClick: undefined,
      }),
    )
  }
  if (modalReducer.status) {
    return (
      <RenderModal
        width={modalReducer.width ? modalReducer.width : 'auto'}
        minWidth="400px"
        onClose={handelModal}
      >
        {/* <div className="GlobalModal"> */}
        <h2>{modalReducer.title}</h2>
        <div className="GlobalModal__p">{modalReducer.contentModal}</div>
        <div
          className="GlobalModal__btns"
          style={{
            textAlign: 'center',
          }}
        >
          {modalReducer.butttonText !== null && (
            <NormalButton background={true} onClick={handelModal}>
              Cerrar
            </NormalButton>
          )}
          {modalReducer.butttonText && (
            <NormalButton onClick={handelButtonModal}>
              {modalReducer.butttonText}
            </NormalButton>
          )}
        </div>
        {/* </div> */}
      </RenderModal>
    )
  } else {
    return null
  }
}

export default GlobalModal
