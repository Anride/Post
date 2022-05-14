import React, { useState } from 'react';

const Search = () => {
  const [val, updVal] = useState();
  const changeText = (e) => {
    updVal(e.target.value);
  }
  return (
    <div className='btn'>
      <form >
        <input type="text" placeholder="Искать здесь..." />
      </form>
    </div>
  )
}
export default Search;

