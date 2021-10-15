export const testReducer = (state = {test: "test"}, action) => {
	switch(action.type) {
		case "TEST":
			return {
				test: [...action.payload]
			}
		default:
			return state
	}
}