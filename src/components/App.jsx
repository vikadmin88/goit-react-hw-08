import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from '../redux/selectors'
import { fetchContacts } from '../redux/contactsOps'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import Loader from './Loader/Loader'
import css from './App.module.css'

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {!error && loading && <Loader />}
    </>
  )
}

export default App
