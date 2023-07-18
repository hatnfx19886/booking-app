import Card from '../../UI/Card';
import './header.css';

const Header = () => {
  return (
    <Card className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
          <span>Stays</span>
        </div>
        <div className="headerListItem">
          <span>Flights</span>
        </div>
        <div className="headerListItem">
          <span>Car rentals</span>
        </div>
        <div className="headerListItem">
          <span>Attractions</span>
        </div>
        <div className="headerListItem">
          <span>Airport taxis</span>
        </div>
      </div>
    </Card>
  );
};

export default Header;
