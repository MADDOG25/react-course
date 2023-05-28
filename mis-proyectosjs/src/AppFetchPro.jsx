import { useFetch } from "./useFetch";

function AppFetchPro(){
    const {data, loading, error, handleCancelRequest} = useFetch('https://jsonplaceholder.typicode.com/users')
    
    return (
        <div>
            <h1>Fetch Like a Pro</h1>
            <button onClick={handleCancelRequest}>Cancel Request</button>
            <div>
                <ul>
                    {error && <li>Error! {error}</li>}
                    {loading && <li>Loading...</li>}
                    {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
                </ul>
            </div>
        </div>
    );
}
export default AppFetchPro;