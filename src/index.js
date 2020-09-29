import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Graphic from './components/graphic';
import Metrics from './components/metrics';
import './styles/index.css';

const Index = () => {

  const [locs, setLocs] = useState(null);
  const [visitedFocus, setVisitedFocus] = useState('visited-focus');
  const [willvisitFocus, setWillvisitFocus] = useState('willvisit-focus');
  const [shiftStar, setShiftStar] = useState(null);
  const [changeStar, setChangeStar] = useState(null);

  const map = useRef(null);
  const tooltip = useRef(null);
  const title = useRef(null);
  const container = useRef(null);

  return (
    <React.Fragment>
      <Header
        title={title}
      />
      <Graphic
        map={map}
        tooltip={tooltip}
        title={title}
        container={container}
        visitedFocus={visitedFocus}
        setVisitedFocus={setVisitedFocus}
        willvisitFocus={willvisitFocus}
        setWillvisitFocus={setWillvisitFocus}
        shiftStar={shiftStar}
        changeStar={changeStar}
      />
      <Metrics
        locs={locs}
        setLocs={setLocs}
        setShiftStar={setShiftStar}
        setChangeStar={setChangeStar}
      />
    </React.Fragment>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);