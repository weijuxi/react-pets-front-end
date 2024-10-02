export default function PetDetail(props) {

    if (!props.selected) return <h1>No Pet Selected</h1>

    return (
        <>
            <h2>{props.selected.name}</h2>
            <h3>Breed: {props.selected.breed}</h3>
            <h3>{props.selected.age} year{props.selected.age > 1 ? "s" : ""} old</h3>
            <button onClick={() => props.setSelected(null)}>Close</button>
        </>
    )
}