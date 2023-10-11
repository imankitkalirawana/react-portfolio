import Popup from "reactjs-popup";
import SpecilizePopup from "./popups/SpecilizePopup";
type SpecializeProps = {
  services: {
    id: string;
    title: string;
    image: string;
    description: string;
    color: string;
    background: string;
  }[];
};

function Specilize({ services }: SpecializeProps) {
  const displayServices = services.slice(0, 3);
  return (
    <div className="specilize" id="specilize">
      <h2 className="topic-heading specilize-heading">Specilizing in</h2>

      <div className="specilize-content">
        {displayServices.map((service) => (
          <Popup
            trigger={
              <div className="specilize-card">
                <i
                  className="fa-regular fa-browser"
                  style={{
                    color: service.color,
                    backgroundColor: service.background,
                  }}
                ></i>
                <div className="specilize-card-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            }
            modal
            closeOnDocumentClick={false}
          >
            <SpecilizePopup />
          </Popup>
        ))}
      </div>
    </div>
  );
}

export default Specilize;
