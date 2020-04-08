import React from 'react';
import useBattleStore from '../stores/BattleStore';

const BattleWindow = () => {
    const { enemyHp, playerHp, battleOver, Attack } = useBattleStore();

    return(
        <div>
            Player HP: {playerHp}
            Enemy HP: {enemyHp}
            {battleOver ? null : <button onClick={Attack}>Attack</button>}
        </div>
    )
}

export default BattleWindow;