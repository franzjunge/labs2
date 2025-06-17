type PlantProps = {
  id?: string,
  name: string,
  price: number,
  imageUrl: string
}

const Plant = ({name, price, imageUrl}: PlantProps) => {
    return (
      <>
        <div>
          <img src={imageUrl} />
          <h3>{name}</h3>
          <p style={{fontSize: "small"}}>£{price}</p>
          <small>TODO: Add to cart</small>
        </div>
      </>  
    );
}

export default Plant;