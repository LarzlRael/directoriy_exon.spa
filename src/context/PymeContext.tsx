

import React from 'react'
import { createContext, useReducer } from 'react';
import { PymeInterfaceResponse } from '../interfaces/pymeResponse';
import { serverAPI } from '../provider/serverProvider';
import { pymeReducer, PymeState } from './pymeReducer';
import { capitalizeFirstLetter } from '../components/utils/utils';

type PymeContextProps = {
  loading: boolean
  allPymes: PymeInterfaceResponse[]
  onePyme: PymeInterfaceResponse | null
  notFound: boolean
}

const AuthInitialState: PymeState = {
  allPymes: [],
  onePyme: null,
  loading: true,
  notFound: false,
}

const PymeContext = createContext({} as PymeContextProps)

const PymeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(pymeReducer, AuthInitialState)

  return (
    <PymeContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </PymeContext.Provider>
  )
}

export { PymeProvider, PymeContext }
