type ButtonProps = {
    label: string,
    onClick: () => void;
}

export function Button({ label, onClick}: ButtonProps) {
    return (
        <button onClick={onClick}
            className="border-2 text-black p-1 m-1 hover:cursor-pointer"
        >
            {label}
        </button>
    );
}