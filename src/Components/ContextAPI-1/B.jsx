import {useContext} from 'react'
import C from './C'
import myContext from './context'

function B() {
    let myData = useContext(myContext);
    return (
        <div>
            <h2 >
                B Component : <span style={{color:"red"}}>{myData}</span>
            </h2>
            <C/>
        </div>
    )
}

export default B