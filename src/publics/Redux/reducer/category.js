const initialState = {
    categoryList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    listId: []
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_CATEGORY_FULFILLED':
            console.log('list')
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: action.payload.data.result
            };
        case 'GET_CATEGORY_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_CATEGORY_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_CATEGORY_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                listId: action.payload.data
            };
        case 'POST_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: [state.dataList, action.payload]
            };
        case 'UPDATE_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'UPDATE_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'UPDATE_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: [state.dataList, action.payload]
            };

        default:
            return state;
    }
}

export default category;   