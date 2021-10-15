export const bandits = [
    {name: "passives", display: "2 Passive Points"},
    {name: "oak", display: "Oak - Life Regen, Phys. Damage Reduction, Phys. Damage"},
    {name: "kraityn", display: "Kraityn - Attack/Cast Speed, Attack Dodge, Move Speed"},
    {name: "Alira", display: "Alira - Mana Regen, Crit Multiplier, Resists"}
]

export const banditDescriptions = bandits.map(bandit => {
    return bandit.display
})

export const getDisplayFromName = (name) => {
    let banditObj;
    bandits.map(bandit => {
        if (bandit.name === name) banditObj = bandit;
        return false;
    })
    return banditObj.display;
}

export const getNameFromDisplay = (display) => {
    let banditObj;
    bandits.map(bandit => {
        if (bandit.display === display) banditObj = bandit;
        return false;
    })
    return banditObj.name;
}