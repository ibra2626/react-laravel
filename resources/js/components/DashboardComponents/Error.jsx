function ErrorUsername(props) {
    if(!props.loginFailed){
        return null
    }
    return (<p>Kullanıcı adı hatalı! Girilen isim : {props.username}</p>)
}

export default ErrorUsername
