import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useDispatch} from 'react-redux';
import {UIAction} from '../../store/UISlice';
const MainHeader = () => {

  const dispatch = useDispatch();
 

  const toggleCartHandler = () =>{
         dispatch(UIAction.toggleCart());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
             <CartButton onClick = {toggleCartHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
