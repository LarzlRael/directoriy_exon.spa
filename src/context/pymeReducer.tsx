import { PymeInterfaceResponse } from '../interfaces/pymeResponse';

export interface PymeState {

    loading: boolean;
    allPymes: PymeInterfaceResponse[],
    onePyme: PymeInterfaceResponse | null,
    notFound: boolean;
}

type PymeAction =
    | { type: 'getAllPymes', payload: PymeInterfaceResponse[] }
    | { type: 'getOnePyme', payload: PymeInterfaceResponse }
    /* | { type: 'signUp', payload: { token: string, usuario: CreadoPor } } */
    | { type: 'addError' }
    | { type: 'notFound' }
    | { type: 'loading' }
    | { type: 'clearOnePyme', payload: PymeInterfaceResponse | null }

export const pymeReducer = (state: PymeState, action: PymeAction): PymeState => {


    switch (action.type) {
        case 'getAllPymes':

            return {
                ...state,
                allPymes: action.payload,
                loading: false,


            };
        case 'getOnePyme':
            return {
                ...state,
                onePyme: action.payload,
                loading: false,
                notFound: false,
            };
        case 'notFound':
            return {
                ...state,
                loading: false,
                notFound: true,
            };

        case 'clearOnePyme':
            return {
                ...state,
                onePyme: action.payload,
                loading: true,
            };
        case 'loading':
            return {
                ...state,
                loading: true,
            };



        default:
            return state;
    }


}