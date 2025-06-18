type CounterDisplayProps = {
    count: number;
}

const CounterDisplay = ({count}:CounterDisplayProps) => {
    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default CounterDisplay;

