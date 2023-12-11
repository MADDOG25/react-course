import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

/*const names = ['Jeffrey', 'Josue', 'Maria', 'Pedro', 'Orlando', 'Eliza'];
const mayusNames = names.map( name => name.toUpperCase());
console.log(mayusNames);*/

/*const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map( point => '1');
console.log(inflatedMarks);*/

/*const names = ['Maria', 'Lucia', 'Susana', 'Rocio', 'Inmaculada'];
const greetingNames = names.map( greeting => 'Bienvenido ' + greeting);
console.log(greetingNames);*/

/*const users = [
    {name: 'Maria', isPremium: false},
    {name: 'Lucia', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocio', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
]
const premiumUsers = users.map(premium => 'Bienvenida' + premium);
const nopremiumUsers = users.map( nopremium => 'Bienvenida ' + nopremium );
console.log(premiumUsers, nopremiumUsers);*/

function Counter(){
    const [ mensaje, setMensaje ] = useState('')

    return(
        <div>
        <input onChange={(e) => setMensaje(e.target.value)}/>
        <button onClick={() => {
            alert('El mensaje es: ' + mensaje)
        }}>Save</button>
        </div>
    )
}

root.render(

    <>
       <App/>

       <Counter/>

    </>

)