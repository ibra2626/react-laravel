function Welcome(props) {
    return (<>
        <p>Hoşgeldin {props.user.name}</p>
        <p>Rolünüz : {props.user.rol}</p>
    </>)
}

export default Welcome
