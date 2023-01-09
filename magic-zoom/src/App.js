import ReactImageMagnify from 'react-image-magnify';
import './App.css';

import watchImg687 from './wristwatch_687.jpg';
import watchImg1200 from './wristwatch_1200.jpg';
import waterfallLarge from './waterfallLarge.jpg';
import waterfallMedium from './waterfallMedium.jpg';

function App() {
  return (
    <div className="fluid">
      <div className="fluid__image-container">
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: watchImg687,
          },
          largeImage: {
            src: watchImg1200,
            width: 1200,
            height: 1800
          }
        }} />
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: waterfallMedium,
          },
          largeImage: {
            src: waterfallLarge,
            width: 1200,
            height: 1500
          }
        }} />
      </div>
    </div>
  );
}

export default App;
