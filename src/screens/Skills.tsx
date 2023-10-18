import "../css/Popup.css";

import Popup from "reactjs-popup";

function Skills() {
  return (
    <>
      <Popup trigger={<button className="button"> Open Modal </button>}>
        <div className="popup"></div>
      </Popup>
    </>
  );
}
export default Skills;
