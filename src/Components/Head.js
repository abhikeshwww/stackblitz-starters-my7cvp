import React, { useEffect, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { YOUTUBE_API_SUGGESTIONS_API, YOUTUBE_LOGO } from '../Utils/Constants';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { cacheResults } from '../Utils/searchSlice';
function Head() {
  const [searctQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const serachCache = useSelector((store) => store.search);

  /**
   * {
   *  "iphone": ["iphone11", "asdfsdf", "asdfasdf", "asdfas"]
   * }
   *
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      /**    if (serachCache[searctQuery]) {
        setShowSuggestions(serachCache[searctQuery]);
      } else getSuggestions();
*/
      serachCache[searctQuery]
        ? setShowSuggestions(serachCache[searctQuery])
        : getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searctQuery]);
  /**#Notes
   * make api call after every every 200 ms
   * getSuggestions();
   * but if the diff between 2 api call is <200 decline the call
   *
   * key -i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key -ip
   * destroy the compnent(useEffect return method)(clears the setTimeout and set up the new timer)
   * - re-render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   *
   */

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    console.log(searctQuery);
    const data = await fetch(YOUTUBE_API_SUGGESTIONS_API + searctQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update in cache
    dispatch(
      cacheResults({
        [searctQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col  p-3 shadow-lg m-3 ">
      <div className="flex col-span-1 cursor-pointer">
        <MenuRoundedIcon onClick={() => toggleMenuHandler()} />
        <a href="/">
          <img className="h-6 mx-2" alt="yt-logo" src={YOUTUBE_LOGO}></img>
        </a>
      </div>
      <div className="col-span-10 px-4">
        <input
          value={searctQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
          className="w-1/2  border border-gray-400 px-3 rounded-l-xl"
          type="search"
        ></input>
        <button className="border border-gray-400 rounded-r-xl px-2 bg-slate-100">
          🔍
        </button>
        {searctQuery && showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-md border border-gray-300">
            <ul>
              {suggestions.map((sugg) => (
                <li className="py-2 px-3 shadow-sm hover:bg-slate-100">
                  🔍{sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <PersonOutlineRoundedIcon />
      </div>
    </div>
  );
}

export default Head;
