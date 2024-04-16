import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from '../redux/contacts/selectors.js'
import Loader from './Loader/Loader'
import Layout from "./Layout/Layout.jsx";
import {apiRefresh} from "../redux/auth/operations.js";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiRefresh());

  }, [dispatch]);

  return (
    <>
      <Layout/>
      {!error && loading && <Loader />}
    </>
  )
}

export default App
