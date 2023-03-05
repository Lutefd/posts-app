import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        <span className={classes.title}>Mural de recados</span>
      </h1>
      <p>
        <Link to="/create" className={classes.button}>
          <MdPostAdd size={18} />
          Novo Recado
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
