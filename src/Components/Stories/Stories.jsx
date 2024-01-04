import React from 'react'
import Title from '../Utils/Title/Title'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { HeartIcon, ClockIcon } from '@heroicons/react/outline'

const Stories = ({story:{title,news}}) => {
  return (
    <div className='mb-11'>
    <Title title={title} />
    <div>
      <Splide>
        {news.map((val, i) => (
          <SplideSlide key={i} className='mb-0.5'>
          <div>
            <div><img src='val.img alt={`img/story/${i}`}' className=''/></div>
            <div>
              <div>
                <HeartIcon className=""/>
                <span>{val.likes}</span>
              </div>
              <div>
                <ClockIcon className=""/>
                <span>{val.time}</span>
              </div>
                  <div>
                <ClockIcon className=""/>
                <span>{val.by}</span>
              </div>
              <div>
                <h1>{val.title}</h1>
                <p>{val.text}</p>
              </div>
              <div>
                <a href= {val.url}>{val.btn}</a>
              </div>
            </div>
          </div>
          
          </SplideSlide>
        ))}
      </Splide>
    </div>

    </div>
  )
}

export default Stories