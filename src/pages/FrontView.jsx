import DescBody from "../components/desc/DescBody";
import Payment from "../components/payments/Payment";
import "./FrontView.css";
import Navbar from "../components/navbar/Navbar";

const FrontView = () => {
  return (
    <div className="mainBodyOuter">
      <Navbar />
      <div className="mainBody">
        <div className="left">
          <DescBody />
        </div>
        <div className="right">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default FrontView;
