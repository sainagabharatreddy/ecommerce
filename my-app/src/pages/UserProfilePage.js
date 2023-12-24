import UserProfile from "../features/user/components/UserProfile";
import NavBar from '../features/navbar/NavBar'
function UserProfilePage() {
    return ( 
        <>
       
      <NavBar>
         <h1 className='mx-auto text-2xl'>My Profile</h1>
        <UserProfile></UserProfile>
      </NavBar>
  
        </>
     );
}

export default UserProfilePage;