import ImageToggleOnScroll from './ImageToggleOnScroll';
// parse in variables to store speaker details (data) as parameters
// wrap speaker detail with React.memo to memoize(cache) the data speaker detail is returning - this is different from useMemo hook
const SpeakerDetail = React.memo( ({
  id,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler,
  }) => { // method to return html and insert data
    //console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
    return (
      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
          className="card-img-top"
          primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
          secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
          alt="{firstName} {lastName}"
        />
        <div className="card-body">
          <h4 className="card-title">
            <button
              data-sessionid={id}
              className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
              onClick={(e) => {
                onHeartFavoriteHandler(e, !favorite);
              }}
            />
            <span>
              {firstName} {lastName}
            </span>
          </h4>

          <span>{bio}</span>
        </div>
      </div>
    );
});

export default SpeakerDetail;
