import PropTypes from 'prop-types';
import Style from './TransactionHistory.module.scss';

export default function TransactionHistory({ items }) {
    return (
        <table className={ Style.transaction }>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={ id }>
                        <td>{ type }</td>
                        <td>{ amount }</td>
                        <td>{ currency }</td>
                    </tr>
                )) }
            </tbody>
        </table>    
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}