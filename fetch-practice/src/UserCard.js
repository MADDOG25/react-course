export function UserCard({name, amount, married, address}){
   
   return <div>

      <h1>{name}</h1>
      <h3>${amount}</h3>
      <p>{married ? 'married' : 'single'}</p>
      <ul>
         <li>City: {address.city}</li>
         <li>Street: {address.street}</li>
      </ul>
   </div>
   

}