import { DeleteBtn, List, ListItem } from 'components/List/ContactsList.styled';
// import PropTypes from 'prop-types';
// import { ContactItem } from '../ListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getVisibleContacts } from 'redux/selectors';
// import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  // const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <DeleteBtn onClick={id => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
          {/* <DeleteBtn onClick={() => onDelete(contact.id)}>Delete</DeleteBtn> */}
        </ListItem>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
