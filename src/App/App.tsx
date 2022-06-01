import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme';
import ConnectedMemeSVG from './components/ui/ConnectedMemeSvg/ConnectedMemeSVG';
import React from 'react';
import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import {ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import NavBar from './components/ui/NavBar/NavBar';

interface IAppState {
  currentMeme:MemeInterface,
  images:Array<ImageInterface>,
  memes:Array<MemeInterface>
}
interface IAppProps{}

const images: Array<ImageInterface>=[
  {id:0,name:"cote",h:270,w:480,url:'cote.jpg'},
  {id:1,name:"mer",h:500,w:310,url:'mer.jpg'},
  {id:2,name:"nature",h:500,w:300,url:'nature.jpg'},
];
class App extends React.Component<IAppProps,IAppState> {

  constructor(props:IAppProps) {
    super(props);
    this.state={currentMeme: emptyMeme, images: [], memes: [] };
  }
  
  componentDidMount(){
    const timgs = fetch('http://localhost:2500/images')
      .then(f=>f.json())

    const tmemes = fetch('http://localhost:2500/memes')
      .then(f=>f.json())
    
    const tAll = Promise.all([timgs,tmemes]);

    const tout=new Promise((resolve)=>
      {
        setTimeout(resolve,100)
      });
     
    Promise.race([tAll,tout]).then(arr_arr=>{
      if(!Array.isArray(arr_arr)) {
        console.log("timeout declenché");
        return;
      }
      console.log(arr_arr);
      this.setState({memes:arr_arr[1], images:arr_arr[0]})
    })
  }
  render() {
    return (
      <div className='App' data-testid="App">
        <Header />
        <NavBar />
        <FlexLayout>
          <ConnectedMemeSVG image={undefined}/>
          <ConnectedMemeForm
            images={this.state.images}
        />
        </FlexLayout>
        <Footer/>
      </div>
    );
   
}
}

export default App;