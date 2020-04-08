import create from 'zustand';

const [useBattleStore] = create(set => ({
    playerHp: 100,
    playerAtk: 10,
    enemyHp: 100,
    enemyAtk: 10,
    battleOver: false,
    Attack: () => set(state => {
        const playerHit = Math.floor(Math.random() * 2);
        const enemyHit = Math.floor(Math.random() * 3);
        let {playerHp, enemyHp, enemyAtk, playerAtk, battleOver} = state;

        if (playerHit === 1) {
            enemyHp = enemyHp - playerAtk < 0 ? 0 : enemyHp - playerAtk;
        }

        if (enemyHit === 1 && enemyHp > 0) {
            playerHp = playerHp - enemyAtk < 0 ? 0 : playerHp - enemyAtk;
        }

        if (enemyHp === 0 || playerHp === 0) {
            battleOver = true;
        }

        return {...state, playerHp, enemyHp, battleOver};
    }),
}));

export default useBattleStore;