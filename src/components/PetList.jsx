export default function PetList(props) {
    const petJsx = props.pets.map((pet) => {
        return (
            <a key={pet._id} onClick={() => props.setSelected(pet)}>
            <li>
                {pet.name}
            </li>
            </a>
        )
    })

    return(
        <>
            <h1>Pet List</h1>
            {!props.pets.length ? <h3>No Pets at this time</h3> : <ul>{petJsx}</ul>}
            <button onClick={props.handleOpenform}>{props.isFormOpen ? "Close" : "Add Pet"}</button>
        </>
    )
}