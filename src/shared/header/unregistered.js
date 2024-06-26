import style from './unregistered.module.css';
import { Link } from 'react-router-dom';


function Unregistered() {
  return (
    <div className={style.unregistered}>
		<a href="" className={style.registered}>Зарегистрироваться</a>
		<svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect opacity="0.6" width="2" height="26" transform="matrix(-1 0 0 1 2 0)" fill="#029491"/>
		</svg>
		<Link to="/authorization"><button className={style.button}>Войти</button></Link>
	</div>
  );
}


export default Unregistered;