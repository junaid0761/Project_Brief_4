function Card({ title, description, children, className = "" }) {
  return (
    <div className={`ui-card ${className}`}>
      {title && <h3>{title}</h3>}

      {description && <p>{description}</p>}

      {children}
    </div>
  );
}

export default Card;