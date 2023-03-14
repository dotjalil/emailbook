import { useAuth } from "../context/Auth"

export function Home(){
    const { user } = useAuth();
    const {full_name,avatar_url} = user.user_metadata
    return (
        <div className="container text-white text-center my-20 ">
            <h1 className="font-bold text-3xl my-6">Welcome to EmailBox</h1>
            <p>Welecome {full_name}</p>
            <img className="m-auto my-16 rounded-lg" src={avatar_url} alt="Main Image" />
        </div>
    )
}