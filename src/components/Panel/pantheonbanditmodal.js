import React from 'react';
import Modal from '../Modal';
import { updatePBModal, updateBandit } from './actions';
import Select from '../Shared/select';
import { banditDescriptions, getNameFromDisplay, getDisplayFromName } from '../../constants/bandits';
import { useSelector, useDispatch } from 'react-redux';

const PantheonBandits = () => {
    let dispatch = useDispatch();
    let currentBandit = useSelector(state => state.bandit.currentBandit)
    return(
        <Modal title={"Pantheons & Bandits"} onClick={() => dispatch(updatePBModal(false))}>
            <Select label={"Bandit"} value={getDisplayFromName(currentBandit)} items={[...banditDescriptions]} handleChange={(val) => dispatch(updateBandit(getNameFromDisplay(val)))} fullWidth={true}/>
        </Modal>
    )
}

export default PantheonBandits;