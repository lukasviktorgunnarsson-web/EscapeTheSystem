

const EndGamepage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b bg-cover bg-no-repeat from-gray-900 to-black text-center p-6 space-y-8"
                style={{ backgroundImage: "url('/endgame.png')" }}>
                <div className="bg-black/70 p-8 rounded-lg shadow-lg max-w-md mt-20">
                    <h1 className="text-4xl font-bold text-white">Congratulations!</h1>
                    <p className="text-lg text-gray-300 mt-4">
                        You have successfully escaped the room!
                    </p>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="
                                px-6 py-3
                                bg-green-500
                                text-white
                                rounded-md
                                font-mono
                                tracking-wide
                                transition-all duration-300
                                hover:bg-green-600
                                mt-6
                            "
                    >
                        PLAY AGAIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EndGamepage