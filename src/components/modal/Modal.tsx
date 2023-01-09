
import React, { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { sizeMedia } from '../../../styles/mediaQuerys';

export interface LayoutProps {
    children: React.ReactNode,
    state: boolean,
    changeState: Function,
    titulo: string;
    padding?: string;
    mostrarHeader?: boolean;
    mostrarOverLay?: boolean;
    positionModal?: string;
}


export const Modal = ({ children,
    state,
    changeState,
    titulo = "modal title",
    mostrarHeader = true,
    mostrarOverLay = true,
    padding = '20px',
    positionModal = 'center'
}: LayoutProps) => {

    const useOutsideAlerter = (ref: any) => {


        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    changeState(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);

        useEffect(() => {
            document.addEventListener("keydown", escFunction, false);
        }, []);

    }

    const escFunction = (event: any) => {
        if (event.keyCode === 27) {
            //Do whatever when esc is pressed
            changeState(false);

        }
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    /* return <div ref={wrapperRef}>{props.children}</div>; */

    return (
        <>
            {state &&
                <Overlay
                    mostrarOverLay={mostrarOverLay}
                    positionModal={positionModal}
                >
                    <ContanedorModal
                        padding={padding}
                        ref={wrapperRef}
                        className="animate__animated animate__fadeIn"
                    >
                        {mostrarHeader &&
                            <EncabezadoModal>
                                <h3>{titulo}</h3>
                            </EncabezadoModal>
                        }
                        <BotonCerrar onClick={() => changeState(false)}>
                            <IoClose
                                width="1rem"
                                height=" 1rem"
                                color="#1766dc"
                            />
                        </BotonCerrar>

                        {children}
                    </ContanedorModal>
                </Overlay>
            }
        </>
    );
}


const Overlay = styled.div<{
    mostrarOverLay: boolean,
    positionModal: string;
}>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index:100;
    top: 0;
    left: 0;
    background: ${({ mostrarOverLay }) => mostrarOverLay ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, .0)'};

    display:flex;
    align-items: ${({ positionModal }) => positionModal};
    justify-content: center;
`;

const ContanedorModal = styled.div<{
    padding: string,
}>`
    width: 50%;
    height: 600px;
    min-height:100px;
    background: #fff;
    position: relative;
    border-radius: 10px;
    transition: .3s ease all;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding: ${({ padding }) => padding};

    @media ${sizeMedia('sm')} {
        width: 90%;
        height: 50%;
    }

`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    h3{
        font-weight: 500;
        font-size: 1rem;
        color: #1766dc;
    }
`;
const BotonCerrar = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    /* width:30px;
    height: 30px; */
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766dc;
    &:hover{
        background: #f2f2f2;
    }
`;