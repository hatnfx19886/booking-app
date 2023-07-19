import classes from './InfoBoard.module.css';

const InfoBoard = () => {
  return (
    <div className={classes.info}>
      <div className={classes.item}>
        <p>USERS</p>
        <h3>100</h3>
      </div>
      <div className={classes.item}>
        <p>ORDERS</p>
        <h3>100</h3>
      </div>
      <div className={classes.item}>
        <p>EARNINGS</p>
        <h3>$ 100</h3>
      </div>
      <div className={classes.item}>
        <p>BALANCE</p>
        <h3>$ 100</h3>
      </div>
    </div>
  );
};

export default InfoBoard;
