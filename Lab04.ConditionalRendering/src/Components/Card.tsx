type CardProps = {
    name: string,
    age: number,
    role: string,
    isActive: boolean
}

const Card = ({name, age, role, isActive}: CardProps) => {
    return (
        <>
            <div>
                <p>Name {isActive && '🏵️'}: {name} ({age}, :{role})</p>
            </div>
        </>
    );
}

export default Card;