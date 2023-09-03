// import { Component } from 'react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Form/ContactsForm';
import { ContactList } from './List/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsTitle, PhonebookTitle, Wrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getVisibleContacts } from 'redux/selectors';

const LS_KEY = 'contacts';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function App() {
  // const [contacts, setContacts] = useLocalStorage(LS_KEY, [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // const { contacts } = useSelector(state => state.contacts);
  const contacts = useSelector(getVisibleContacts);
  // const { searchQuery } = useSelector(state => state.filter);

  // const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   contacts.find(contact => data.name === contact.name)
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : setContacts(prevState => [...prevState, newContact]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter
      // filter={searchQuery}
      // onChange={event => dispatch(changeFilter(event.currentTarget.value))}
      />
      <ContactList contacts={contacts} />
    </Wrapper>

    //     <Wrapper>
    //   <PhonebookTitle>Phonebook</PhonebookTitle>
    //   <ContactForm onSubmit={formSubmitHandler} />
    //   <ContactsTitle>Contacts</ContactsTitle>
    //   <Filter filter={filter} onChange={changeFilter} />
    //   <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    // </Wrapper>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     console.log(data);
//     const newContact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };

//     if (this.state.contacts.find(contact => data.name === contact.name)) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem(LS_KEY);
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );

//     return (
//       <Wrapper>
//         <PhonebookTitle>Phonebook</PhonebookTitle>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <ContactsTitle>Contacts</ContactsTitle>
//         <Filter filter={this.state.filter} onChange={this.changeFilter} />
//         <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
//       </Wrapper>
//     );
//   }
// }
