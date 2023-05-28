import './index.css'
export function TaskCard({ready}){

    // const cardStyle = {background: 'gray', padding: '10px', color: 'white'};

    return <div className="card">

        <h1>Mi primer tarea</h1>
        <span className={ready ? 'bg-green' : 'bg-red'}>{ready ? 'Tarea Realizada' : 'Tarea Pendiente'}</span>
    </div>
}