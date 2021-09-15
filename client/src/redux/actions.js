import * as api from '../api/index';

export const getInvoices = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchInvoices()

        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}