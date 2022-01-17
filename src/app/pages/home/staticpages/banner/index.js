import React from 'react';
import banner1 from '../../../../../assets/images/service-icon-02.png'
import banner2 from '../../../../../assets/images/service-icon-01.png'
import banner3 from '../../../../../assets/images/service-icon-03.png'
import video from '../../../../../assets/images/course-video.mp4'
import meeting1 from '../../../../../assets/images/meeting-01.jpg'
import meeting2 from '../../../../../assets/images/meeting-02.jpg'
import meeting3 from '../../../../../assets/images/meeting-03.jpg'
import meeting4 from '../../../../../assets/images/meeting-04.jpg'
import course1 from '../../../../../assets/images/course-01.jpg'
import course2 from '../../../../../assets/images/course-02.jpg'
import course3 from '../../../../../assets/images/course-03.jpg'
import course4 from '../../../../../assets/images/course-04.jpg'
import './index.scss'
import $ from 'jquery';

const Banner = () => {

  $('.nav li:first').addClass('active');

  var showSection = function showSection(section, isAnimate) {
    var direction = section.replace(/#/, ''),
    reqSection = $('.section').filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

    if (isAnimate) {
      $('body, html').animate({
        scrollTop: reqSectionPos },
      800);
    } else {
      $('body, html').scrollTop(reqSectionPos);
    }

  };

  var checkSection = function checkSection() {
    $('.section').each(function () {
      var
      $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
      if (topEdge < wScroll && bottomEdge > wScroll) {
        var
        currentId = $this.data('section'),
        reqLink = $('a').filter('[href*=\\#' + currentId + ']');
        reqLink.closest('li').addClass('active').
        siblings().removeClass('active');
      }
    });
  };

  $('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
    e.preventDefault();
    showSection($(this).attr('href'), true);
  });

  $(window).scrollTop(function () {
    checkSection();
  });

    return (
      <div>
      <section className='section main-banner' id='top' data-section='section1'>
      <video autoPlay muted loop id='bg-video'>
          <source src={video} type='video/mp4' />
      </video>

      <div className='video-overlay header-text'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='caption'>
              <h6>Hello Students</h6>
              <h2>Welcome to Education</h2>
              <p>This is an edu meeting HTML CSS template provided by <a rel='nofollow noreferrer' href='https://templatemo.com/page/1' target='_blank'>TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel='nofollow noreferrer' href='https://www.pexels.com/@pressmaster' target='_blank'>Pressmaster</a>.</p>
              <div className='main-button-red'>
                  <div className='scroll-to-section'><a href='#contact'>Join Us Now!</a></div>
              </div>
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>

  <section className='services'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='owl-service-item owl-carousel'>
          
            <div className='item'>
              <div className='icon'>
                <img src={banner2} alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Education</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src={banner1} alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Teachers</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src={banner3} alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Students</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src={banner2} alt=''/>
              </div>
              <div className='down-content'>
                <h4>Online Meeting</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src={banner3} alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Networking</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='services'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='owl-service-item owl-carousel'>
          
            <div className='item'>
              <div className='icon'>
                <img src='../../../../../../public/assets/images/service-icon-01.png' alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Education</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src='../../../../../../public/assets/images/service-icon-02.png' alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Teachers</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src='../../../../../../public/assets/images/service-icon-03.png' alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Students</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src='../../../../../../public/assets/images/service-icon-02.png' alt=''/>
              </div>
              <div className='down-content'>
                <h4>Online Meeting</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className='item'>
              <div className='icon'>
                <img src='../../../../../../public/assets/images/service-icon-03.png' alt=''/>
              </div>
              <div className='down-content'>
                <h4>Best Networking</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='upcoming-meetings' id='meetings'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='section-heading'>
            <h2>Upcoming Meetings</h2>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='categories'>
            <h4>Meeting Catgories</h4>
            <ul>
              <li><a href='#'>Sed tempus enim leo</a></li>
              <li><a href='#'>Aenean molestie quis</a></li>
              <li><a href='#'>Cras et metus vestibulum</a></li>
              <li><a href='#'>Nam et condimentum</a></li>
              <li><a href='#'>Phasellus nec sapien</a></li>
            </ul>
            <div className='main-button-red'>
              <a href='meetings.html'>All Upcoming Meetings</a>
            </div>
          </div>
        </div>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='meeting-item'>
                <div className='thumb'>
                  <div className='price'>
                    <span>$22.00</span>
                  </div>
                  <a href='meeting-details.html'><img src={meeting1} alt='New Lecturer Meeting'/></a>
                </div>
                <div className='down-content'>
                  <div className='date'>
                    <h6>Nov <span>10</span></h6>
                  </div>
                  <a href='meeting-details.html'><h4>New Lecturers Meeting</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='meeting-item'>
                <div className='thumb'>
                  <div className='price'>
                    <span>$36.00</span>
                  </div>
                  <a href='meeting-details.html'><img src={meeting2} alt='Online Teaching'/></a>
                </div>
                <div className='down-content'>
                  <div className='date'>
                    <h6>Nov <span>24</span></h6>
                  </div>
                  <a href='meeting-details.html'><h4>Online Teaching Techniques</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='meeting-item'>
                <div className='thumb'>
                  <div className='price'>
                    <span>$14.00</span>
                  </div>
                  <a href='meeting-details.html'><img src={meeting3} alt='Higher Education'/></a>
                </div>
                <div className='down-content'>
                  <div className='date'>
                    <h6>Nov <span>26</span></h6>
                  </div>
                  <a href='meeting-details.html'><h4>Higher Education Conference</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='meeting-item'>
                <div className='thumb'>
                  <div className='price'>
                    <span>$48.00</span>
                  </div>
                  <a href='meeting-details.html'><img src={meeting4} alt='Student Training'/></a>
                </div>
                <div className='down-content'>
                  <div className='date'>
                    <h6>Nov <span>30</span></h6>
                  </div>
                  <a href='meeting-details.html'><h4>Student Training Meetup</h4></a>
                  <p>Morbi in libero blandit lectus<br/>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='apply-now' id='apply'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 align-self-center'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='item'>
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout.</p>
                <div className='main-button-red'>
                  <div className='scroll-to-section'><a href='#contact'>Join Us Now!</a></div>
              </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='item'>
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.</p>
                <div className='main-button-yellow'>
                  <div className='scroll-to-section'><a href='#contact'>Join Us Now!</a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='accordions is-first-expanded'>
            <article className='accordion'>
                <div className='accordion-head'>
                    <span>About Edu Meeting HTML Template</span>
                    <span className='icon'>
                        <i className='icon fa fa-chevron-right'></i>
                    </span>
                </div>
                <div className='accordion-body'>
                    <div className='content'>
                        <p>If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel='nofollow noreferrer' href='https://www.toocss.com/' target='_blank'>Too CSS website</a>. If you need a working contact form script, please visit <a href='https://templatemo.com/contact' target='_parent'>our contact page</a> for more info.</p>
                    </div>
                </div>
            </article>
            <article className='accordion'>
                <div className='accordion-head'>
                    <span>HTML CSS Bootstrap Layout</span>
                    <span className='icon'>
                        <i className='icon fa fa-chevron-right'></i>
                    </span>
                </div>
                <div className='accordion-body'>
                    <div className='content'>
                        <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br/><br/>
                        Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
                    </div>
                </div>
            </article>
            <article className='accordion'>
                <div className='accordion-head'>
                    <span>Please tell your friends</span>
                    <span className='icon'>
                        <i className='icon fa fa-chevron-right'></i>
                    </span>
                </div>
                <div className='accordion-body'>
                    <div className='content'>
                        <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br/><br/>
                        Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
                    </div>
                </div>
            </article>
            <article className='accordion last-accordion'>
                <div className='accordion-head'>
                    <span>Share this to your colleagues</span>
                    <span className='icon'>
                        <i className='icon fa fa-chevron-right'></i>
                    </span>
                </div>
                <div className='accordion-body'>
                    <div className='content'>
                        <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/>
                        Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
                    </div>
                </div>
            </article>
        </div>
        </div>
      </div>
    </div>
  </section>

  <section className='our-courses' id='courses'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='section-heading'>
            <h2>Our Popular Courses</h2>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='owl-courses-item owl-carousel'>
            <div className='item'>
              <img src={course1} alt='Course One'/>
              <div className='down-content'>
                <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$160</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course2} alt='Course Two'/>
              <div className='down-content'>
                <h4>Curabitur molestie dignissim purus vel</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$180</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course3} alt=''/>
              <div className='down-content'>
                <h4>Nulla at ipsum a mauris egestas tempor</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$140</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course3} alt=''/>
              <div className='down-content'>
                <h4>Aenean molestie quis libero gravida</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course1} alt=''/>
              <div className='down-content'>
                <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src='../../../../../../public/assets/images/course-02.jpg' alt=''/>
              <div className='down-content'>
                <h4>TemplateMo is the best website for Free CSS</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$270</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course3} alt=''/>
              <div className='down-content'>
                <h4>Web Design Templates at your finger tips</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$340</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course4} alt=''/>
              <div className='down-content'>
                <h4>Please visit our website again</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$360</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course1} alt=''/>
              <div className='down-content'>
                <h4>Responsive HTML Templates for you</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course2} alt=''/>
              <div className='down-content'>
                <h4>Download Free CSS Layouts for your business</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$430</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course3} alt=''/>
              <div className='down-content'>
                <h4>Morbi in libero blandit lectus cursus</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$480</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <img src={course4} alt=''/>
              <div className='down-content'>
                <h4>Curabitur molestie dignissim purus</h4>
                <div className='info'>
                  <div className='row'>
                    <div className='col-8'>
                      <ul>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                        <li><i className='fa fa-star'></i></li>
                      </ul>
                    </div>
                    <div className='col-4'>
                       <span>$560</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='our-facts'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>A Few Facts About Our University</h2>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-12'>
                  <div className='count-area-content percentage'>
                    <div className='count-digit'>94</div>
                    <div className='count-title'>Succesed Students</div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='count-area-content'>
                    <div className='count-digit'>126</div>
                    <div className='count-title'>Current Teachers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-12'>
                  <div className='count-area-content new-students'>
                    <div className='count-digit'>2345</div>
                    <div className='count-title'>New Students</div>
                  </div>
                </div> 
                <div className='col-12'>
                  <div className='count-area-content'>
                    <div className='count-digit'>32</div>
                    <div className='count-title'>Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className='col-lg-6 align-self-center'>
          <div className='video'>
            <a href='https://www.youtube.com/watch?v=HndV87XpkWg' target='_blank' rel='noreferrer'><img src='../../../../../../public/assets/images/play-icon.png' alt=''/></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='contact-us' id='contact'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-9 align-self-center'>
          <div className='row'>
            <div className='col-lg-12'>
              <form id='contact' action='' method='post'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h2>Let us get in touch</h2>
                  </div>
                  <div className='col-lg-4'>
                    <fieldset>
                      <input name='name' type='text' id='name' placeholder='YOURNAME...*' required=''/>
                    </fieldset>
                  </div>
                  <div className='col-lg-4'>
                    <fieldset>
                    <input name='email' type='text' id='email' pattern='[^ @]*@[^ @]*' placeholder='YOUR EMAIL...' required=''/>
                  </fieldset>
                  </div>
                  <div className='col-lg-4'>
                    <fieldset>
                      <input name='subject' type='text' id='subject' placeholder='SUBJECT...*' required=''/>
                    </fieldset>
                  </div>
                  <div className='col-lg-12'>
                    <fieldset>
                      <textarea name='message' type='text' className='form-control' id='message' placeholder='YOUR MESSAGE...' required=''></textarea>
                    </fieldset>
                  </div>
                  <div className='col-lg-12'>
                    <fieldset>
                      <button type='submit' id='form-submit' className='button'>SEND MESSAGE NOW</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='right-info'>
            <ul>
              <li>
                <h6>Phone Number</h6>
                <span>010-020-0340</span>
              </li>
              <li>
                <h6>Email Address</h6>
                <span>info@meeting.edu</span>
              </li>
              <li>
                <h6>Street Address</h6>
                <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
              </li>
              <li>
                <h6>Website URL</h6>
                <span>www.meeting.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
      <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved. 
          <br/>Design: <a href='https://templatemo.com' target='_parent' title='free css templates'>TemplateMo</a></p>
    </div>
  </section>
  </div>
    )
}

export default Banner;
