import axios from 'axios';

let url = `http://192.168.6.191:3999`


export const getAllNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(`${url}/note`)
    }
}

export const getNoteId = (idNote) => {
    return {
        type: 'GET_NOTE_ID',
        payload: axios.get(`${url}/note/${Number(idNote)}`)
    }
}

export const addNotes = (data) => {
    return {
        type: 'POST_NOTES',
        payload: axios.post(`${url}/note`, data)
    }
}
export const updateNotes = (idNote, data) => {
    return {
        type: 'UPDATE_NOTES',
        payload: axios.patch(`${url}/note/${idNote}`, data)
    }
}