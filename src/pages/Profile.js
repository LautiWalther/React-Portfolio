import { useAuth } from "../components/auth";

function Profile() {
    const auth = useAuth();
    
    return (
        <>
            <h3>Welcome {auth.user}</h3>
        </>
    )
}

export default Profile;