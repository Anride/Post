import React, { useState } from 'react';

const Search = () => {
const [val, updVal] = useState();
const changeText = (e) => {
    updVal(e.target.value);
}
return (
    <form>
        <input type='text' value={val} onInput={changeText} />

    </form>
)
}
export default Search;

