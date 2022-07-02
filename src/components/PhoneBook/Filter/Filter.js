import { useContacts } from '../../../hooks/useContacts';
import s from './Filter.module.css';

function Filter() {

  const { filter, setFilter } = useContacts();

  return (
    <form>
      <label>
        Find contacts by name
        <input
          className={s.Filter_input}
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Enter something to start searching"
        />
      </label>
    </form>
  );
}
export default Filter;
