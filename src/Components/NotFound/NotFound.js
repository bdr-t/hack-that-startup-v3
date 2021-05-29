import Login from "../Login/Login";

const NotFound = (props) => {
    //se renderiza cuando se intenta buscar algun usuario que no exitste
    //le pasa los mismos props que recibia desde App -haciendo de intermediario-
    //le paso otra prop, que es la de errror, para que renerize texto diciendo que no se ha encontrado usuario
    return ( 
        <Login error={true} handleChange={props.handleChange} name={props.name}/>
     );
}
 
export default NotFound;