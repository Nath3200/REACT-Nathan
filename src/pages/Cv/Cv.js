import React, {useState} from 'react';
import Introduction from '../../components/Introduction/Introduction';
import Main from '../../components/Main/Main';
import Lien from '../../components/Lien/Lien';
import Sect from '../../components/Sect/Sect';
import Footer from '../../components/Footer/Footer';

const Cv = () => {

    const [name, setName] = useState("Nathan Guedj");
    // let name = "nathan guedj"
    // cb = callback
    const HandleName = (cb)=>{ //importer test du l enfant
       setName(cb)
    }
  return (
    <div className="">
      <header>
            <Introduction name={name}/>

			<Lien/>

		</header>
		
		<Sect/>

      <Main HandleName={HandleName} name={name}/>

      <Footer name={name}/>
    </div>
  );
}

export default Cv