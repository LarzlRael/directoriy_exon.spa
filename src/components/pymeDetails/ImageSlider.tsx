import React, { useState, useEffect } from 'react'
import { useAnimationn } from '../../hooks/useAnimaton'
import { Modal } from '../modal/Modal'

interface PropsSliderImages {
  urlImages: string[]
}
export const ImageSlider = ({ urlImages }: PropsSliderImages) => {
  const [currentImage, setCurrentImage] = useState({
    currentUrl: urlImages[0],
    currentIndex: 0,
  })
  useEffect(() => {
    setCurrentImage({
      currentUrl: urlImages[0],
      currentIndex: 0,
    })
    return () => {
      setCurrentImage({
        currentUrl: '',
        currentIndex: 0,
      })
    }
  }, [urlImages, setCurrentImage])

  const { animation, setAnimation } = useAnimationn()

  const [modalState, setModalState] = useState(false)

  const changeStatexd = () => {
    setModalState(true)
  }

  const changeImage = (url: string, index: number): void => {
    setAnimation(true)
    setCurrentImage({
      currentUrl: url,
      currentIndex: index,
    })
  }
  /* const changeNextImage = () => {
        setAnimation(true);

        setCurrentImage({
            currentIndex: currentImage.currentIndex + 1,
            currentUrl: `https://picsum.photos/id/${currentImage.currentIndex}/900/1024`
        })
    }
    const changePrevImage = () => {
        setAnimation(true);

        setCurrentImage({
            currentIndex: currentImage.currentIndex - 1,
            currentUrl: `https://picsum.photos/id/${currentImage.currentIndex}/900/1024`
        });
    } */

  /* return {
        changeImage,
        changeNextImage,
        changePrevImage,
        currentImage,
        //? animation state
        animation,
        setAnimation
    }; */
  return (
    <>
      <div className="ImageSlider">
        <div
          className={`ImageSlider__main-image pointer ${
            animation ? 'fadeInAnimation' : ''
          }`}
          onAnimationEnd={() => setAnimation(false)}
          onClick={changeStatexd}
        >
          <img
            className="ImageSlider__main-current-image"
            src={currentImage.currentUrl}
            alt=""
          />
        </div>

        <div className="ImageSlider__images-info">
          {urlImages.map((image, i) => (
            <div className="ImageSlider__image-item pointer" key={i}>
              <img
                src={`${image}`}
                alt="que fue :D"
                onClick={() => changeImage(image, i)}
                onAnimationEnd={() => setAnimation(false)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        state={modalState}
        changeState={setModalState}
        titulo="que fue"
        mostrarHeader={false}
        padding="0px"
      >
        <img
          src={currentImage.currentUrl}
          alt=""
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Modal>
    </>
  )
}
