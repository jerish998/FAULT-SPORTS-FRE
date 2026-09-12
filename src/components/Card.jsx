import './Card.css';

function Card({ title, description, image, buttonText }) {
  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt={title}
          className="card-image"
        />
      )}

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        {buttonText && (
          <button className="card-button">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
