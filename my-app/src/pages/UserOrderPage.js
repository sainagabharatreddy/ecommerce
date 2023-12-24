import NavBar from "../features/navbar/NavBar";
import UserOrder from "../features/user/components/UserOrder";
function UserOrderPage() {
    return (  
        <>
        <div>

            <NavBar>
            <h1 className='mx-auto text-2xl'>My Orders</h1>
                <UserOrder></UserOrder>
            </NavBar>
           
        </div>
        </>
    );
}

export default UserOrderPage;