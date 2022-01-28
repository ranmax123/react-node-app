import './App.css';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Slider, { SliderTooltip } from 'rc-slider';
import like from './assets/images/like.png';
import unlike from './assets/images/unlike.png';
import happy from './assets/images/happy.png';
import neutral from './assets/images/neutral.png';
import Input from './components/input';
import Rating from './components/rating';
import API from './utils/api';

const { Handle } = Slider;

const App = () => {
  const [bodyLanguageRating, _bodyLanguageRating] = useState(0)
  const [bodyLanguageText, _bodyLanguageText] = useState('')
  const [reflectingBackRating, _reflectingBackRating] = useState(1)
  const [reflectingBackText, _reflectingBackText] = useState('')
  const [exploratoryQuestionRating, _exploratoryQuestionRating] = useState(0)
  const [exploratoryQuestionText, _exploratoryQuestionText] = useState('')
  const [comments, _comments] = useState('')
  const [loading, _loading] = useState(false)
  const [isError, _isError] = useState(false)
  const [isSubmited, _isSubmited] = useState(false)

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    _reflectingBackRating(value);
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  const submit = () => {

    if (!(bodyLanguageText?.trim() && reflectingBackText?.trim() && exploratoryQuestionText?.trim() && comments?.trim())) {
      _isError(true);
      alert('All inputs are required.')
      return
    }

    const data = {
      bodyLanguageRating,
      bodyLanguageText: bodyLanguageText?.trim(),
      reflectingBackRating,
      reflectingBackText: reflectingBackText?.trim(),
      exploratoryQuestionRating,
      exploratoryQuestionText: exploratoryQuestionText?.trim(),
      comments: comments?.trim(),
    }
    _loading(true)

    API('feedback', data).then(() => {
      _isSubmited(true);
      _bodyLanguageRating(0)
      _bodyLanguageText('')
      _reflectingBackRating(0)
      _reflectingBackText('')
      _exploratoryQuestionRating(0)
      _exploratoryQuestionText('')
      _comments('')
      _isError(false)
    }).finally(() => {
      _loading(false)
    });
  }

  return (
    <div className="App">
      <div className="col-lg-6 col-md-8 container">
        <div className="p-1" >
          <div className="header" >
            Today’s Subject
          </div>
          <div className="sub-title" >
            Feedback to support your pod
          </div>
          <div className='app-body' >

            <span>Body Language and Tone</span>
            <Rating maxRat={5} value={bodyLanguageRating} onClick={_bodyLanguageRating} />
            <Input
              value={bodyLanguageText}
              onChange={_bodyLanguageText}
              isRequired
              isError={isError}
            />

            <span>Reflecting Back</span>
            <div className='slider-container'>
              <img src={neutral} />
              <Slider min={1} max={10} handle={handle} style={{ margin: 10 }} />
              <img src={happy} />
            </div>
            <Input
              value={reflectingBackText}
              onChange={_reflectingBackText}
              isRequired
              isError={isError}
            />

            <span>Exploratory Questions</span>
            <Rating maxRat={5} value={exploratoryQuestionRating} onClick={_exploratoryQuestionRating} />
            <Input
              value={exploratoryQuestionText}
              onChange={_exploratoryQuestionText}
              isRequired
              isError={isError}
            />

            <span>Additional Comments</span>
            <Input
              value={comments}
              onChange={_comments}
              isRequired
              isError={isError}
            />

            <button onClick={submit} disabled={loading} >{isSubmited ? 'Thank You' : 'Submit'}
              {loading && <Spinner animation="border" size="sm" className="white ms-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
