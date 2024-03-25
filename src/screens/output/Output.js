import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
//import style from './main.module.css';
import { observer } from 'mobx-react-lite';
import HeaderOutput from "./HeaderOutput";
import GeneralSummary from "./GeneralSummary";
import ListDocument from "./ListDocument";


function Output() {
	return (
	  <>
		<Header/>
		  <main className="container">
			<HeaderOutput/>
			<GeneralSummary/>
			<ListDocument/>
		  </main>
		<Footer/>
	  </>
	);
  }

  export default observer(Output);