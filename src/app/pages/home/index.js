/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './index.scss';
import Banner from './staticpages/banner';
import Postlist from './postlist';
import AllPosts from '../home/components/allpost';
import Tabs from './staticpages/tabs';
import Slides from './Slides';
import Category from './category';

const Home = () => {

    const [switchPost, setSwitchPost] = useState(false);
    const handlePost = () => {
        setSwitchPost(!switchPost);
    }

    return (


        <div className='width-container'>
<div className='slider'>
<Slides/>
</div>
           
              <div className='all-post'>
              <AllPosts />
              </div>     
{/* <div>
    <Banner/>
</div> */}
{/* <Category/> */}
        </div>
    )
}

export default Home;
