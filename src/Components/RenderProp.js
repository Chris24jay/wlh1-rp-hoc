import React from 'react'
//importing PropTYpes
import PropTypes from 'prop-types'

// we call this RenderProp but don't follow that naming convention.
// call it something that makes sense like any other normal component
//we destructure render off because it is a prop when we use it in App.js
const RenderProp = ({render}) => (
  // render is just a function that we are invoking here
  // in App.js, we have access to something called 'props' in the render prop
  // we can call them whatever we want but props is common
  // in App.js, we pass in the artists array and a genre as a string
  render((genre, list) => {
    // filtering the list to show only the artists with the genere we specify
    const filteredList = genre ? list.filter((artist) => artist.genre === genre) : list
    return (
      <div>
        {/* rendering some JSX */}
        {filteredList.map((artist) => (
          <div className="artist-container" key={artist.name}>
            <img className="artist-img" src={artist.artistImg} alt={artist.name} />
            <div className="artist-info">
              <h3>{artist.name}</h3>
              <p>{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
    )
  })
)

// defining our proptypes
RenderProp.propTypes = {
  render: PropTypes.func.isRequired
}

export default RenderProp