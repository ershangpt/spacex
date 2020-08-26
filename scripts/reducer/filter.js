const filter = (state = 0, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, "cards": action.payload }
        case 'FETCH':
            return { ...state, "filter": action.payload }
        default:
            return { 'filter': null, 'cards': null };
    }
}

export default filter;