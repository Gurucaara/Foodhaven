const Shimmer = () => {
  return (
    <div className="restraunt-list">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <img className="shimmer-image" />
            <p className="shimmer-card-heading"></p>
            <p className="shimmer-card-restaurant-name"></p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
