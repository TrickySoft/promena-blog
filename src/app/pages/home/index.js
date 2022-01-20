/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './index.scss';
import Banner from './staticpages/banner';
// import Postlist from './postlist';
import AllPosts from '../home/components/allpost';
import Tabs from './staticpages/tabs';
import Latest from './staticpages/latest post';
import Slides from './Slides';
import Category from './category';

const Home = () => {

    const [switchPost, setSwitchPost] = useState(false);
    const handlePost = () => {
        setSwitchPost(!switchPost);
    }

    return (


        <div className='width-container'>
            <div className='wrap'>
                <div className='wrap__banner'>
                    <Banner />
                </div>
                {/* 
                <div className='wrap__postlist'>
                    <Postlist />
    </div> */}
            </div>
            <div className='slider'>
              <Slides/>
              </div>
            <div className='features'>
                   <div className='features__alPost'>
                   <AllPosts />
                   </div>
                    <div className='features__category'>
                 <Category/>
                </div>
                </div>

            <div className='Latest__posts'>
                <Latest />
            </div>
            <div className='post-tab'>
                <div className='all-tabs items'>
                    <Tabs />
                </div>
{/* <div>
    <AllPosts/>
</div> */}
            </div>
        </div>
    )
}

export default Home;
