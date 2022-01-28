import React, { memo } from "react";
import like from '../assets/images/like.png';
import unlike from '../assets/images/unlike.png';

export default memo(({ maxRat, value, onClick = () => { } }) => {

  return (
    <div>
      {[...new Array(maxRat)].map((_, i) => {
        const index = i + 1
        return (
          <img
            key={`body${index}`} className='thumb'
            src={index <= value ? like : unlike}
            onClick={() => onClick(value == index ? 0 : index)} />
        )
      })}
    </div>
  )
})