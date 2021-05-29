import { Container, Flex } from './Lista.style';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { CgWebsite } from 'react-icons/cg';
import { CgWorkAlt } from 'react-icons/cg';

const Lista = ({ location, email, company, repos, blog }) => {
  // renderiza lista de informacion
  return (
    <Flex>
      {/* <p>{repos} repositories</p> */}
      {location && <Container>
        <GrLocation />
        <p>{location}</p>
      </Container>}

      {email && <Container>
        <HiOutlineMail />
        <p>{email}</p>
      </Container>}

      {company && <Container>
        <CgWorkAlt />
        <p>{company}</p>
      </Container>}
      {blog && <Container>
        <CgWebsite />
        <a href={blog}>{blog}</a>
      </Container>}
    </Flex>
  );
};

export default Lista;
