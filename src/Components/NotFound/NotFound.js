import Login from "../Login/Login";

const NotFound = (props) => {
    return ( 
        <Login error={true} handleChange={props.handleChange} name={props.name}/>
     );
}
 
export default NotFound;