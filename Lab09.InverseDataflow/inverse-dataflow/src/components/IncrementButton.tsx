type IncrementButtonProps = {
    increment: () => void;
};

const IncrementButton = ({increment}: IncrementButtonProps) => {

    return (
        <>
            <button onClick={increment}>Increment the counter</button>
        </>
    )
}

export default IncrementButton;