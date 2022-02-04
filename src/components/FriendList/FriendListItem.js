import PropTypes from 'prop-types';
import Style from './FriendListItem.module.scss';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={ Style.item }>
            <span className={ isOnline ? Style.online : Style.offline }></span>
            <img className={ Style.avatar } src={ avatar } alt={ name } width="48" />
            <p className={ Style.name }>{ name }</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
};