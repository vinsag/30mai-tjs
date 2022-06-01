import ConnectedMemeSVG from "./components/ui/ConnectedMemeSvg/ConnectedMemeSVG";
import React, { useEffect } from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import NavBar from "./components/ui/NavBar/NavBar";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _store, { ACTIONS_CURRENT } from "./store/store";
import { MemeInterface } from "orsys-tjs-meme";

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className="App" data-testid="App">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home ..
              <br />
              Bienvenue sur cette page
            </div>
          }
        />
        <Route
          path="/editor"
          element={<MemeEditor/>
          }
        />
        <Route
          path="/editor/:id"
          element={<MemeEditor/>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

const MemeEditor=(props:any)=> {

  const dispatch = useDispatch();
  const params=useParams();
  const memes = useSelector((state:any)=> state.ressources.memes)
  useEffect(() => {
    console.log(memes)
    if (undefined !== params.id) {
      dispatch({
        type: ACTIONS_CURRENT.UPDATE_CURRENT,
        value: memes.find(
          (m: MemeInterface) => m.id === Number(params.id)
        ),
      });
    } else {
      dispatch({ type: ACTIONS_CURRENT.CLEAR_CURRENT});
    }
   }, [params, dispatch, memes])
  
  console.log(useParams(),useLocation())
  return (
    <FlexLayout>
        <ConnectedMemeSVG/>
        <ConnectedMemeForm/>
    </FlexLayout>
  );
  }
export default App;