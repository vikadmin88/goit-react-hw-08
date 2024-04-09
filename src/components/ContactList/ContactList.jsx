import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from './Contact/Contact'
import css from './ContactList.module.css'

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listBox}>
      {
        filteredContacts && filteredContacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      }
    </ul>
    
  )
}

export default ContactList