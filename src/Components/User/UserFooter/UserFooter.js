import { Flex } from "./UserFooter.styled";

const UserFooter = ({ followers, following }) => {
    return (
      <Flex>
        <p>{followers} followers</p>
        <p>{following} following</p>
    
      </Flex>
    );
  };
  
  export default UserFooter;
  