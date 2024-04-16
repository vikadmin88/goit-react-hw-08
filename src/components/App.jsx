import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader/Loader'
import {apiRefresh} from "../redux/auth/operations.js";
import RoutesChain from "./RoutesChain/RoutesChain.jsx";
import {selectIsRefreshing} from "../redux/auth/selectors.js";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(apiRefresh());

  }, [dispatch]);

  return (
    <>
      {isRefreshing ? <Loader /> : <RoutesChain/>}
    </>
  )
}

export default App
