import React, {useState } from 'react';

const Tour = ({ id, title, img, price, desc, removeTour }) => {
  const [readMore, setReadMore] = useState(false);


  return (
        <article key={id} className='tour-item'>
          <img src={img} alt={title} className='img' />
          <footer>
          <div className='item-info'>
              <h3>{title}</h3>
              <h3 className='tour-price'>5 days from £{price}*</h3>
              </div>
            <p className='item-text'>{readMore?desc: `${desc.substring(0, 250)}...`
            }
            <button onClick= {() => setReadMore(!readMore)}>
              {readMore?'Show Less': 'Read More'}
            </button>
            </p>
            <button className='btn-del' onClick={() => removeTour(id)}>Not Interested</button>
          </footer>
        </article>
  );
};

export default Tour;