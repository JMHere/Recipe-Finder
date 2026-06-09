type ButtonProps = {
    label: string,
    onClick: () => void;
}

export function Button({ label, onClick}: ButtonProps) {
    return (
        <button onClick={onClick}
            className="border-2 text-black bg-blue-300"
        >
            {label}
        </button>
    );
}