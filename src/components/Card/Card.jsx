import './Card.css';

function Card({ type, title, description, image, data, buttonText }) {
 if (type == image) {
    return (
      <div className="card-container image-card">
        <img
          src={image}
          alt={title}
          className="card-image"
        />

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
  if(type == 'data'){
return (
    <div className="card-container">
      {image && (
        <img src={image}
          alt={title}
          className="card-image"
        />
      )}

      <div className="card-content"><h2>{title}</h2>

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
  if(type = 'api'){
  return (
    <div className="card-container data-card">
      <div className="card-content">
        <h2>{title}</h2>

        <div className="data-content">
          {data}
        </div>

        {buttonText && (
          <button className="card-button">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
  }
  
}

export default Card;
