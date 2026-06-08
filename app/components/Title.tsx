export function Title({ children }: { children: React.ReactNode}) {
    return (
        <h1 className="text-4xl font-bold text-green-600 mb-4">
        {children}
        </h1>
    );
}