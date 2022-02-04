import PropTypes from 'prop-types';
import Style from './Statistics.module.scss';


export default function Statistics({ title, stats }) {
    return (
        <section className={ Style.statistics }>
            <h2 className={ Style.title }>{ title }</h2>

            <ul className={ Style.statList }>
                { stats.map(stat => {
                    return (
                        <li key={ stat.id } className={ Style.item }>
                            <span className={ Style.label }> { stat.label }</span>
                            <span className={ Style.percentage }> { stat.percentage } %</span>
                        </li>
                    )
                }) }                
            </ul>
        </section>
    )
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};