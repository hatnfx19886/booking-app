import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <h4 className={classes.title}>Admin Page</h4>
        <p className="smaller">MAIN</p>
        <div className={classes.item} onClick={() => navigate('/')}>
          <img src="./dashboard.png" alt="" height="16px" />
          <span>Dashboard</span>
        </div>
        <p className="smaller">LIST</p>
        <div className={classes.item}>
          <span>User</span>
        </div>
        <div className={classes.item} onClick={() => navigate('/hotels')}>
          <span>Hotels</span>
        </div>
        <div className={classes.item} onClick={() => navigate('/rooms')}>
          <span>Rooms</span>
        </div>
        <div className={classes.item} onClick={() => navigate('/transactions')}>
          <span>Transactions</span>
        </div>
        <p className="smaller">NEW</p>
        <div className={classes.item} onClick={() => navigate('/hotels/add')}>
          <span>New Hotel</span>
        </div>
        <div className={classes.item} onClick={() => navigate('/rooms/add')}>
          <span>New Room</span>
        </div>
        <p className="smaller">USER</p>
        <div
          className={classes.item}
          onClick={() => {
            navigate('/');
            auth.logout();
          }}
        >
          <span>Logout</span>
        </div>
      </div>
      <main>{props.children}</main>
    </div>
  );
};

export default Sidebar;
