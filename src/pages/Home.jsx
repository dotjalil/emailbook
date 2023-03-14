import { useAuth } from "../context/Auth"

export function Home(){
    const { user, signOut } = useAuth();
    const {full_name,picture} = user.user_metadata
    return (
        <div className="container text-white text-center my-20 ">
            <h1 className="font-bold text-3xl my-6">Welcome to EmailBox</h1>
            <p>Welecome {full_name}</p>
            <img className="m-auto my-16 rounded-lg" src={picture} alt="Main Image" />
            <button className="text-[#3B41C5] bg-white rounded-lg flex items-start p-2 hover:scale-105 duration-150 m-auto px-6" onClick={signOut}>SignOut</button>
        </div>
    )
}