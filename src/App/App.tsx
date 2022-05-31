import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme';
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

const images: Array<ImageInterface>=[
  {id:0,name:"cote",h:270,w:480,url:'cote.jpg'},
  {id:1,name:"mer",h:1120,w:516,url:'mer.jpg'},
  {id:2,name:"nature",h:800,w:500,url:'nature.jpg'},
];
class App extends React.Component<IAppProps,IAppState> {

  constructor(props:IAppProps) {
    super(props);
    this.state={currentMeme: emptyMeme, images: images };
  }
  
  render() {
    return (
      <div className='App' data-testid="App">
        <Header />
        <NavBar />
        <FlexLayout>
          <MemeSVGViewer image={
            this.state.images.find(e=>e.id===this.state.currentMeme.imageId)

          } meme={this.state.currentMeme} basePath='/media/'/>
          <MemeForm 
            meme={this.state.currentMeme} 
            images={this.state.images}
            onMemeChange={(meme:MemeInterface)=>{
              this.setState({ currentMeme: meme});
          }
          } />
        </FlexLayout>
        <Footer/>
      </div>
    );
   
}
}

export default App;