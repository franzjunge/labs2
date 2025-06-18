import { useState } from "react";

type PlantProps = {
  id?: string,
  name: string,
  price: number,
  imageUrl: string
}

const Plant = ({name, price, imageUrl}: PlantProps) => {
    const [addText, setAddText] = useState("Add to cart");
    const [inCart, setInCart] = useState(false)
    function addHandler(): void {
      setAddText( inCart ? "In cart" : "Add to cart" );
      setInCart(!inCart);
    }
    return (
      <>
        <div>
          <img src={imageUrl} />
          <h3>{name}</h3>
          <p style={{fontSize: "small"}}>£{price}</p>
          <button onClick={addHandler}>{addText}</button>
        </div>
      </>  
    );
}

export default Plant;