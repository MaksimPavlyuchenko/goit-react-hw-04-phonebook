import PropTypes from 'prop-types';

import { List, ListItem, Button } from './ContactList.styled';

const ContactList = ({ dataContacts, handlerDelete }) => {
  return (
    <>
      <List>
        {dataContacts().map(({ name, id, telephone }) => {
          return (
            <ListItem key={id}>
              {name}: {telephone}{' '}
              <Button type="button" id={id} onClick={() => handlerDelete(id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  dataContacts: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};
