export const panelTab = (state = {activeTab: "tree"}, action) => {
	switch(action.type) {
		case "UPDATE_ACTIVE_TAB":
			return {
				activeTab: action.payload
			}
		default:
			return state
	}
}

export const bandit = (state = {currentBandit: ""}, action) => {
	switch(action.type) {
		case "UPDATE_BANDIT":
			return {
				currentBandit: action.payload
			}
		default:
			return state
	}
}