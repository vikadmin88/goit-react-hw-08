import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import { selectNameFilter } from "../../redux/filters/selectors.js";
import css from './SearchBox.module.css'

const SearchBox = () => {

  const dispatch = useDispatch();
  const searchStr = useSelector(selectNameFilter);

  const handelInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label className={css.label}>Find contacts by name
        <input className={css.field} type="text"
          name="name"
          value={searchStr}
          onChange={handelInput}
        />
      </label>
    </div>
  )
}

export default SearchBox