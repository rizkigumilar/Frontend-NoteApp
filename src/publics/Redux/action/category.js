import axios from 'axios';


let url = `https://note-appslah.herokuapp.com`


export const getAllCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(`${url}/category`)
    }
}

export const getCategoryId = (idCat) => {
    return {
        type: 'GET_CATEGORY_ID',
        payload: axios.get(`${url}/category/${Number(idCat)}`)
    }
}

export const addCategory = (data) => {
    return {
        type: 'POST_CATEGORY',
        payload: axios.post(`${url}/category`, data)
    }
}
export const updateCategory = (data, idCat) => {
    return {
        type: 'UPDATE_CATEGORY',
        payload: axios.patch(`${url}/category/${Number(idCat)}`, data)
    }
}