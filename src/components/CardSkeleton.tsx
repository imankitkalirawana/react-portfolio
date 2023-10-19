import Skeleton from "react-loading-skeleton";
import "../css/CardSkeleton.css";

type Props = {
  cards: number;
};

function CardSkeleton({ cards }: Props) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div className="card-skeleton" key={index}>
        <div className="card-image">
          <Skeleton width={268} height={150} />
        </div>
        <div className="card-details">
          <h3 className="card-title">
            <Skeleton />
          </h3>
          <h3 className="card-description">
            <Skeleton />
          </h3>
        </div>
      </div>
    ));
}

export default CardSkeleton;
