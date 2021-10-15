import { tabs } from '../../constants/paneltabs';

export const getComponentFromTabName = (name) => {
    let component;
    tabs.map(tab => {
        if (name === tab.name) component = tab.component;
        return false;
    })
    return component;
}