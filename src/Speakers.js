import React, { useEffect, useState, useContext, useReducer, useCallback, useMemo } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/static/site.css";
import { Header } from '../src/Header';
import { Menu } from '../src/Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';
import { configContext } from './App';

const Speakers = ({}) => {
  // useState calls for checkboxes and loading
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  // reducer function that takes 2 parameters - previous state and action - then returns a new state
  function SpeakersReducer (state, action){
    // function to update favorite speaker button
    function updateFavorite(favoriteValue){
      return state.map((item, index) => {
        if (item.id === action.sessionId){
          item.favorite = favoriteValue;
          return item;
        }
        return item;
      });
    }

    // switch statement based on parsed in action type - if action type in "case" returns true, set action.data
    switch (action.type) {
      case "setSpeakerList" : {
        return action.data;
      }
      case "favorite" : {
        return updateFavorite(true);
      }
      case "unfavorite" : {
        return updateFavorite(false);
      }
      //
      default:
        return state;
    }
  }
  // "dispatch" is just a name that can be anything just so a second parameter (method) can be parsed into useReducer hook
  const [speakerList, dispatch] = useReducer(SpeakersReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  // reference shared context with useContext hook
  const context = useContext(configContext);

  // useEffect call that simulates calling an outside service with a 1s delay then filters and sorts data on completion
  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      // call dispatch to set speaker list and data to be used by reducer above
      dispatch({
        type: "setSpeakerList",
        data: speakerListServerFilter
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  // filter speaker list based on wether they're speaking sat or sun, then sort them by firstname
  // wrap with useMemo to create a cache of the speaker data -- useMemo take in a function and an array -- the array is a dependency which means that if anything changes in the data the cache is dumped and run again
  const newSpeakerList = useMemo(() => speakerList
  .filter(
    ({ sat, sun }) =>
      (speakingSaturday && sat) || (speakingSunday && sun),
  )
  .sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  }), [speakingSaturday, speakingSunday, speakerList]);

  // parse the filtered list constant into this conditional because useMemo can't be used with conditionals 
  const speakerListFiltered = isLoading
    ? []
    : newSpeakerList;

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  // call useCallback to memoize(cache) this function so that it doesn't rerender all components on every change
  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    // call dispatch to set favorite value on reducer
    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId
    });

  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 checkbox-bigger">
          {/* check context of showSpeakerSpeakingDays before displaying the checkboxes */}
          {context.showSpeakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
