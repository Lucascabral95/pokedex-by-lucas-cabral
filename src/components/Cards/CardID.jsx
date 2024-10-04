import { useParams } from "react-router-dom"
import Card from "./Card.jsx"

export default function CardID() {
    const { carta } = useParams();

    return (
        <>

            <Card poke={carta} />

        </>
    )
}