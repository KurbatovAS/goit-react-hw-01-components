// import styles for App component
import './App.scss';

// task 1 - <Profile>
import Profile from './components/Profile/Profile';
import userData from './data/user.json';

// task 2 - <Statistics>
import Statistics from './components/Statistics/Statistics';
import statData from './data/data.json';

// task 3 - <FriendList>
import FriendList from './components/FriendList/FriendList';
import friendsData from './data/friends.json';

// task 4 - <Transactions>
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionsData from './data/transactions.json';

export default function App() {
    return (
        <div className="App">
            {/* call components */}
            <Profile
                username={ userData.username }
                tag={ userData.tag }
                location={ userData.location }
                avatar={ userData.avatar }
                stats={ userData.stats } />
            
            <Statistics title="Upload stats" stats={ statData } />
            
            <FriendList friends={ friendsData } />
            
            <TransactionHistory items={ transactionsData } />
        </div>
    );
}