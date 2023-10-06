const SideFilterCard = ({ heading, data, param_name }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{param_name}</p>
      {console.log(data)}
    </div>
  );
};

export default SideFilterCard;
