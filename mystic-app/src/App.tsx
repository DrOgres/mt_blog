import { useEffect, useState } from "react";
import Design from './components/Design';
import Ramble from './components/Ramble';
import Publish from './components/Publish';
import { NavLink } from "react-router-dom";
import sanityClient from './Client';

function App() {
  const [shownPage, setShownPage] = useState('ramble');
  const [postData, setPostData] = useState(null);

  useEffect(()=>{
    sanityClient
			.fetch(
				`*[_type == "post"]{
      title,
      slug,
      date,
      section,
      mainImage,
      body
    }`
			)
			.then((data) => setPostData(data))
			.catch(console.error);

    const targetDiv = document.getElementById(shownPage);
    clearDefaults();
    targetDiv?.classList.remove("w-1", "text-transparent");
    targetDiv?.classList.add("w-full");
    console.log(postData);
  }, [])

  function handleChangeTab(tab: string){
  
    setShownPage(tab);
    const targetDiv = document.getElementById(tab);

    clearDefaults();
    targetDiv?.classList.remove("w-1", "text-transparent");
    targetDiv?.classList.add("w-full");
  }

  function clearDefaults(){
    document
      .getElementById("ramble")
      ?.classList.remove("w-full", "text-transparent");
    document
      .getElementById("design")
      ?.classList.remove("w-full", "text-transparent");
    document
      .getElementById("publish")
      ?.classList.remove("w-full", "text-transparent");
    document.getElementById("ramble")?.classList.add("w-1", "text-transparent");
    document.getElementById("design")?.classList.add("w-1", "text-transparent");
    document.getElementById("publish")?.classList.add("w-1", "text-transparent");
  }

  return (
    <div className="text-center flex flex-col gap-4 justify-center items-center bg-slate-800 text-slate-50 min-h-screen bg-[url('./assets/bg_tile.png')]">
    <header>
      <section className="container mx-auto">
      <h1 className="">Mystic Thresholds</h1>
      <h2 className="uppercase">A ttrpg from the ground up</h2>
      <div className="text-lg text-left px-8">
        Join me as I develop the latest version of the Mysthic Thresholds RPG.
        Along the way we will explore what works what doesn't, and by the end
        we'll have a full set of rules free for you to download. (And a FoundryVTT system too!)
      </div></section>
    </header>
    <section className="navigation flex flex-col w-full">
      <ul className="flex border-b">
        <li className="mb-px mr-1">
          
          <NavLink
            className=" inline-block border-l border-t border-r rounded-t py-2 px-4 bg-slate-50 text-slate-800 font-semibold uppercase"
            to="#"
            onClick={()=>handleChangeTab('ramble')}
            
          >
            Rambling and Thinking
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            className="bg-slate-100 border-l border-t border-r rounded-t inline-block py-2 px-4 text-slate-500 hover:text-slate-800 font-semibold uppercase"
            to="#"
            onClick={()=>handleChangeTab('design')}
          >
            Designing and Testing
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            className="bg-slate-200  border-l border-t border-r rounded-t inline-block py-2 px-4 text-slate-500 hover:text-slate-800 font-semibold uppercase"
            to="#"
            onClick={()=>handleChangeTab('publish')}
          >
            Writing and Publishing
          </NavLink>
        </li>
      </ul>

      <div className="flex bg-slate-50 text-slate-800 text-left justify-end gap-2 min-h-screen pl-6">
        <div className="ramble bg-slate-50 overflow-hidden transition-all duration-300 ease-out " id="ramble">
          <Ramble />
          
        </div>
        <div className="design bg-slate-100 overflow-hidden transition-all duration-300 ease-out " id="design">
         <Design />
         
        </div>
        <div
          className="publish bg-slate-200 overflow-hidden transition-all duration-300 ease-out "
          id="publish"
        >
          <Publish />
        </div>
        <div className="sidebar bg-slate-300 w-30">And a sidebar here</div>
      </div>
    </section>
    <footer className="py-3">
      <div className="flex flex-col mx-auto">
        <p className="ring-2 ring-offset-2 outline-offset-4 p-2 rounded-md bg-slate-800">
          powered by Ogres
        </p>
      </div>
    </footer>
  </div>

  )
  }
export default App;
