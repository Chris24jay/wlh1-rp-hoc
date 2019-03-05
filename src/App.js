//importing React, Component and Fragment
// We use Fragment in place of a div
// WHen fragment is rendered, nothing displays. You don't see anything
// This helps with keeping your HTML clean
import React, { Component, Fragment } from 'react';
import './App.css';
// importing our custom components
import HOC from './Components/HOC'
import RenderProp from './Components/RenderProp'
import Toggle from './Components/Toggle'

// artist array of data
const artists = [
  {
    name: 'Modest Mouse',
    genre: 'Alternative',
    artistImg:
      'https://www.kansascity.com/latest-news/by7r7a/picture210718134/ALTERNATES/FREE_1140/modest%20mouse.jpg'
  },
  {
    name: 'Chance the Rapper',
    genre: 'Rap',
    artistImg:
      'http://s3.amazonaws.com/hiphopdx-production/2016/12/Chance-The-Rapper-by-Mike-Lavin-@thehomelesspimp-4-1-800x600.jpg'
  },
  {
    name: 'Talking Heads',
    genre: 'Alternative',
    artistImg:
      'https://www.desktopbackground.org/download/800x600/2015/04/29/940579_talking-heads-this-must-be-the-place-naive-melody-youtube_1920x1080_h.jpg'
  },
  {
    name: 'Atmosphere',
    genre: 'Rap',
    artistImg: 'https://storage.googleapis.com/rhymesayers/images/_tile/atmosp.png'
  },
  {
    name: 'David Bowie',
    genre: 'Alternative',
    artistImg:
      'https://media.npr.org/assets/img/2016/01/11/gettyimages-114939559-152a6dea2f0ae78878fb4b1d2a596cb229556a44-s800-c85.jpg'
  }
]

class App extends Component {
  render() {
    return (
			<div className='App'>
				<h1>Higher Order Component</h1>
        {/* using the toggle component */}
				<Toggle
					render={() => (
            // using Fragment
						<Fragment>
              {/* using our HOC component with different data */}
							<HOC list={artists} genre='Rap' />
							<HOC list={artists} genre='Alternative' />
              {/* here we pass in genre with an empty string because it is a falsy value */}
							<HOC list={artists} genre='' />
						</Fragment>
					)}
				/>

				<h1>Render Props</h1>
        {/* using the Toggle component */}
        <Toggle render={() => (
          // using Fragment
          <Fragment>
            {/* Using the RenderProp component */}
            {/* we can call the component whatever we want but render is common */}
            {/* props is passed as a param in the render function, you can also call this whatever you want but props is common */}
            <RenderProp render={(props) => props('Rap', artists)} />
            <RenderProp render={(props) => props('Alternative', artists)} />
            {/* passing in an empty string because it is falsy */}
            <RenderProp render={(props) => props('', artists)} />
          </Fragment>
        )} />
			</div>
		)
  }
}

export default App;
