import PropTypes from 'prop-types';
import Style from './Profile.module.scss';


export default function Profile ({ username, tag, location, avatar, stats }) {
    return (
        <div className={ Style.profile }>
            <div className={ Style.description }>
                <img
                    src={ avatar }
                    alt={ username }
                    className={ Style.avatar }
                />
                <p className={ Style.name }>{ username }</p>
                <p className={ Style.tag }>@{ tag }</p>
                <p className={ Style.location }>{ location }</p>
            </div>

            <ul className={ Style.stats }>
                <li>
                    <span className={ Style.label }>Followers</span>
                    <span className={ Style.quantity }>{ stats.followers }</span>
                </li>
                <li>
                    <span className={ Style.label }>Views</span>
                    <span className={ Style.quantity }>{ stats.views }</span>
                </li>
                <li>
                    <span className={ Style.label }>Likes</span>
                    <span className={ Style.quantity }>{ stats.likes }</span>
                </li>
            </ul>
        </div>
    )
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};