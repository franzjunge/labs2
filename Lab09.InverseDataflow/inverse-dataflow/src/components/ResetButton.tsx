type ResetButtonProps = {
    reset: () => void;
}

const ResetButton = ({reset}: ResetButtonProps) => {
    return (
        <>
            <button onClick={reset}>Reset to 0</button>
        </>
    )

}

export default ResetButton;