import React from 'react';
import ProgressLabel from '../lib/progress-label';

export default () => {
  const pw = 24;
  const cw = pw / 2;
  const tw = pw;
  
  return (
    <div className="m-nested">
      <div className="example">
        <ProgressLabel
          className="label-1"
          progress={40}
          progressWidth={pw}
          trackWidth={tw}
          cornersWidth={cw}
          progressColor="#ff0000"
          trackColor="#330000"
          fillColor="#333333"
          size={250}>
        </ProgressLabel>

        <ProgressLabel
          className="label-2"
          progress={50}
          progressWidth={pw}
          trackWidth={tw}
          cornersWidth={cw}
          progressColor="#00ff00"
          trackColor="#003300"
          fillColor="#333333"
          size={190}>
        </ProgressLabel>

        <ProgressLabel
          className="label-3"
          progress={80}
          progressWidth={pw}
          trackWidth={tw}
          cornersWidth={cw}
          progressColor="#05bae0"
          trackColor="#01252d"
          fillColor="#333333"
          size={130}>
        </ProgressLabel>
      </div>
    </div>
  );
};
