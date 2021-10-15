export const pbModal = (state = {showPBModal: false}, action) => {
	switch(action.type) {
		case "UPDATE_PB_MODAL":
			return {
				showPBModal: action.payload
			}
		default:
			return state
	}
}

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

export const bandit = (state = {currentBandit: "passives"}, action) => {
	switch(action.type) {
		case "UPDATE_BANDIT":
			return {
				currentBandit: action.payload
			}
		default:
			return state
	}
}