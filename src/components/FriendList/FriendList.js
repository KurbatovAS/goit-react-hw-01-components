import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import Style from './FriendList.module.scss';

export default function FriendList({ friends }) {
    return (
        <ul className={ Style.friendList }>
            {friends.map(({ id, avatar, name, isOnline }) => (                
                <FriendListItem
                    key={ id }   
                    avatar={ avatar }
                    name={ name }
                    isOnline={ isOnline }
                />                
            ))}
        </ul>
    )    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,            
        })
    )
};