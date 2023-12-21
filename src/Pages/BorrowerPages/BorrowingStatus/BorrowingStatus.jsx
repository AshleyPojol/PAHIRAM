import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import BorrowTrack from "./BorrowTrack";
// import PropTypes from "prop-types";

function BorrowingStatus() {
  return (
    <MainDisplayLayout>
      <BorrowTrack  />
    </MainDisplayLayout>
  )
}

// BorrowingStatus.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

export default BorrowingStatus;
