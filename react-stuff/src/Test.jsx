export function Test({ test }) {
    return (
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer">
            <h1 className="text-white font-bold uppercase rounded-lg">{test.title}</h1>
        </div>
    );
}
