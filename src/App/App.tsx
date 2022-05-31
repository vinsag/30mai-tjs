import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme, IImage, IMeme } from 'orsys-tjs-meme/dist/interfaces/common';
import React from 'react';
import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import MemeForm from './components/ui/MemeForm/MemeForm';
import NavBar from './components/ui/NavBar/NavBar';

interface IAppState {
  currentMeme:MemeInterface,
  images:Array<ImageInterface>
}
interface IAppProps{}
class App extends React.Component<IAppProps,IAppState> {

  constructor(props:IAppProps) {
    super(props);
    this.state={currentMeme: emptyMeme, images: [] };
  }
  
  render() {
    return (
      <div className='App' data-testid="App">
        <Header/>
        <NavBar/>
        <FlexLayout>
          <MemeSVGViewer image={undefined} meme={this.state.currentMeme}/>
          <MemeForm/>
        </FlexLayout>
        <Footer/>
      </div>
    );
   
}
}

export default App;