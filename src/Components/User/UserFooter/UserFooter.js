import { Flex } from "./UserFooter.styled";

const UserFooter = ({ followers, following }) => {
  //renderiza seguidores y seguidos
    return (
      <Flex>
        <p>{followers} followers</p>
        <p>{following} following</p>
    
      </Flex>
    );
  };
  
  export default UserFooter;
  