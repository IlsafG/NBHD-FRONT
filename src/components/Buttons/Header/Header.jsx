import React from 'react';
import { useTelegram } from '../../../hooks/useTelegram';

export const Header = (props) => {
    const {user, onClose} = useTelegram();

    return (
       <div className={'header'}>
        <button onClick={onClose}>Закрыть</button>
        <span  className={'username'}>
            {user?.username}
        </span>
       </div>
    )
}