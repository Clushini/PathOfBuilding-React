import Tree from '../components/Tree';
import Skills from '../components/Skills';
import Items from '../components/Items';
import Calcs from '../components/Calcs';

export const tabs = [
    {name: "tree", display: "Tree", component: <Tree />, color: "blue"},
    {name: "skills", display: "Skills", component: <Skills />, color: "red"},
    {name: "items", display: "Items", component: <Items />, color: "yellow"},
    {name: "calcs", display: "Calcs", component: <Calcs />, color: "green"}
]