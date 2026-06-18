import { Link } from "react-router-dom"


const HomePage = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 bg-green-100">
            <h1 className="text-4xl font-bold">Välkommen till Project NEXUS</h1>
            <p> Du har hamnat i ett labyrintiskt system där du måste lösa pussel för att komma ut.
                Spelet består av flera **rum** som du navigerar mellan, och ett **inventory** som följer med genom hela spelet.
                Varje rum innehåller ett pussel som löses genom att använda rätt föremål från inventoriet.
                När ett pussel löses får du ett nytt föremål, som i sin tur behövs för att lösa nästa rum – en kedja hela vägen fram till utgången. Lycka till!
            </p>
            <Link to="/room/server-room">
                <button className="px-4 py-2 bg-black text-white rounded hover:bg-green-600">Starta Spelet</button>
            </Link>
        </div>
    )
}

export default HomePage