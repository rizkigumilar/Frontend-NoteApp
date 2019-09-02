const initialState = {
    noteList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    listId: []
}

const note = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                noteList: action.payload.data.result
            };
        case 'GET_NOTE_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_NOTE_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_NOTE_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                listId: action.payload.data
            };
        case 'POST_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                noteList: [state.dataList, action.payload]
            };
        case 'UPDATE_NOTE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'UPDATE_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'UPDATE_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                noteList: [state.dataList, action.payload]
            };

        default:
            return state;
    }
}

export default note;   