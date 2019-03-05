import React from 'react'
// importing the PropTypes package to set a datatype on each prop we use
import PropTypes from 'prop-types'

// the naming convention 'withSomething' is common for HOC's
// An HOC is just a function that returns a component
// we pass in BasecComponent here as a param
// We alos destructure list and genre that will be params when we use the HOC component in App.js
const withFilteredProps = (BaseComponent) => ({list, genre}) => {
  // filtering our list based on the genre we receive
  const filteredList = genre ? list.filter((artist) => artist.genre === genre) : list
  //using the filtered list as a prop we call artistList
  return <BaseComponent artistList={filteredList}/>
}


//Here we are creating a Component in the same file
// this is common for HOC's but we could just build it somewhere else and import it
// destructuring the artistList prop off from above
const DisplayList = ({artistList}) => (
  <div>
    {/* rendering some jsx */}
    {artistList.map((artist) => (
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

// here is where we invoke the HOC with the DisplayList component passed in
const HOC = withFilteredProps(DisplayList)

//declaring what data type our props should be
HOC.propTypes = {
  list: PropTypes.array.isRequired,
  genre: PropTypes.string
}

export default HOC