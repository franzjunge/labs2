type CardProps = {
    name: string,
    age: number,
    role: string
}

const Card = ({name, age, role}: CardProps) => {
    return (
        <>
            <p>The entry was from {name} ({age}, :{role})</p>
        </>
    );
}

export default Card;