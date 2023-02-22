import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-fit.png";

import Furiosa from "../../Assets/furiosa.png";
import DojoMoto from "../../Assets/dojomoto.png";
import Rakproperties from "../../Assets/rakproperties.png";
import Minaal from "../../Assets/minaal.png";
import Feature1 from "../../Assets/feature1.png";
import Feature2 from "../../Assets/feature2.png";
import Feature3 from "../../Assets/feature3.png";
import Exercise1 from "../../Assets/exercise1.png";
import Exercise2 from "../../Assets/exercise2.png";

import Programs1 from "../../Assets/programs1.png";
import Programs2 from "../../Assets/programs2.png";
import Programs3 from "../../Assets/programs3.png";
import Programs4 from "../../Assets/programs4.png";
import Programs5 from "../../Assets/programs5.png";

import ImageSec1 from "../../Assets/imageSec1.png";
import ImageSec2 from "../../Assets/imageSec2.png";
import ImageSec3 from "../../Assets/imageSec3.png";
import ImageSec4 from "../../Assets/imageSec4.png";
import ImageSec5 from "../../Assets/imageSec5.png";
import ImageSec6 from "../../Assets/imageSec6.png";

import ProfileImg from "../../Assets/profilePic.png";
import ProfileSecBg from "../../Assets/profileSecBg.png";


import { ArrowRight } from 'react-bootstrap-icons';


import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <>
      <section className="grid-section">
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={6} className="home-header">
                <h1>Your Peak
                  Performance Partner</h1>
                <p>When our customers come to us, they can be sure they are becoming part of a partnership that was put together with their best interest in mind. Our partners know how important health and fitness is to our clients, so special care and professionalism has been put into consideration in coming up with personalized fitness training and nutrition programs tailored to meet specific needs of our clients in and around the UAE.</p>

                <a class="c_btn"><span>Deside</span> <ArrowRight size={25} /> </a>

              </Col>

              <Col md={6} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "550px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="home-section-white">
          <h1>Our Partners </h1>

          <Container>

            <Row className="partnerLogo">
              <Col md={3}>
                <img src={Furiosa} />
              </Col>
              <Col md={3}>
                <img src={DojoMoto} />
              </Col>
              <Col md={3}>
                <img src={Rakproperties} />
              </Col>
              <Col md={3}>
                <img src={Minaal} />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <Container fluid className="home-section-black-bg">
        <h1>Why Choose Us? </h1>
        <h2>Take a look at our best features:</h2>
        <Container>

          <Row className="featureBox">
            <Col md={12}>
              <h2><img src={Feature1} /> Custom Workouts</h2>
              <p>We have unique workouts sessions specific to requirements of every client. No matter what your needs are when it comes to keeping fit and staying healthy, Professional Fitness definitely has something that will work for you. </p>

              <p>There are a variety of training routines you might need to consider –generalfitness, yoga, Pilates, bodybuilding, boxing, as well as Muay Thai, MMA, Swimming, calisthenics, pre- and post-natal, and more. So no matter where you are on your health and fitness journey, Professional Fitness can help you reach your goals!</p>
            </Col>
          </Row>

          <Row className="featureBox">
            <Col md={12}>
              <h2><img src={Feature2} /> Self Defense</h2>
              <p>Many people understand the importance of self-defense tactics, and Professional Fitness offers the opportunity for people to get unique self-defense under expertmentorship. By signing up for our self-defense programs, what you’re getting is both physical and mental empowerment that will help you face up to the challenges of everyday life. So you have the chance to stay in shape, stay healthy, have the right mindset, and development mental stamina through Professional Fitness.</p>
            </Col>
          </Row>

          <Row className="featureBox">
            <Col md={12}>
              <h2><img src={Feature3} /> Nutrition</h2>
              <p>We care about what you’re eating and how you’re eating it. It’s the key to your fitness and health. But a lot of people are constantly faced with eating disorder problem, leading to a number of complications in their lives. Professional Fitness have expert nutritionists and fitness trainers that will take you through the rules of a great diet, and help you cope with any eating-related issues you might be going through.
              </p>

              <p>We know how important having a great diet is for you, that’s why we are here to help you put the perfectnutritionalplan in pace, combined with unique fitness programs that your body needs for all-round fitness.Our nutrition plans is created with our clients in mind – using their preferences and lifestyle as a foundational element. And what’s more;Professional Fitness nutrition plans are easy to follow, with focus on helping clients eat healthier diets that can lower the risk of chronic diseases or manage any complication that they currently have.
              </p>
            </Col>
          </Row>


        </Container>
      </Container>

      <section className="grid-section">
        <Container fluid className="home-section" id="home">

          <Container className="section">
            <Row className="experciseRow">
              <Col md={6}>
                <img src={Exercise1} />
              </Col>

              <Col md={6}>
                <h2>Our Vision</h2>
                <p>At Professional Fitness, we strive to provide the best health and fitness services to help our clients to live healthier, richer lives– we have been able to set a benchmark in the industry by creating individualized health, fitness, and workout plans that not only meet, but also exceed client needs.</p>
                <a class="c_btn"><span>Deside</span> <ArrowRight size={25} /> </a>
              </Col>

            </Row>

            <Row className="experciseRow">
              <Col md={6}>
                <h2>Our Values</h2>
                <ul>
                  <li data-icon="test">Professionalism and excellence in everything we do </li>
                  <li data-icon="">Driving toward ultimate human performance</li>
                  <li data-icon="">Count on us for reliable results</li>
                  <li data-icon="">Treat people with respect, compassion, and kindness</li>
                  <li data-icon="">Build strong and lasting relationships through honesty and transparency</li>
                  <li data-icon="">Being the best coaches</li>
                  <li data-icon="">Lead the industry and our people with the best example</li>
                  <li data-icon="">Continuous learning and improvement</li>
                </ul>
              </Col>

              <Col md={6}>
                <img src={Exercise2} />
              </Col>



            </Row>
          </Container>
        </Container>

      </section>

      <section fluid className="home-section-black-bg">
        <h2>Professional</h2>
        <h1>Fitness Training Programs </h1>

        <Container>

          <Row className="programRow">
            <Col md={6} style={{ textAlign: 'left' }}>
              <img src={Programs1} />
            </Col>

            <Col md={6}>
              <h2>General Fitness</h2>
              <p>If you are looking to work towards achieving overall health and well-being, then general fitness training is what you need. Our general fitness program balances five core elements of good health: aerobic fitness, strength training, core exercise, balance training, and flexibility and stretching.</p>
            </Col>

          </Row>

          <Row className="programRow">

            <Col md={6}>
              <h2>Bodybuilding</h2>
              <p>Many people want great shape but hardly succeed in their body-building adventure. When you come to Professional Fitness, our professional bodybuilding coaches are on ground to take you through the step-by-step process of building the perfect body of your dreams without dedicating your entire life to fitness. What you need is the right kind of support and routine, and the rest is easy, and that’s what we’re there for. Your body building journey shouldn’t be so complicated.</p>
            </Col>

            <Col md={6} style={{ textAlign: 'right' }}>
              <img src={Programs2} />
            </Col>

          </Row>

          <Row className="programRow">
            <Col md={6} style={{ textAlign: 'left' }}>
              <img src={Programs3} />
            </Col>

            <Col md={6}>
              <h2> Martial Arts</h2>
              <p> A lot of people show interest in combat sports like MMA, but they have no clue where to get the right training. They’re not even sure if learning martial arts – a codified system of combat – isfor them. The good thing is that anyone can master the rudiment of martial arts, even you!</p>

              <p> Professional Fitness has competent coaches to teach and guide you in the martial arts. Whatever your goals and reason for deciding to get training in martial arts – self-defense tactics, military and law enforcement applications, competition, or development of the mind, body, and soul – ourjob is to make it happen for you, and we take our job very seriously! </p>

            </Col>

          </Row>

          <Row className="programRow">

            <Col md={6}>
              <h2>Pre- and Post-Natal Training</h2>
              <p>Pregnant and nursing mothers are not left out, and we have just the perfect pre- and post-natal workout sessions that your body needs for that special period of your life. Our training for this special group is designed to help minimize pain, apply positive impact on the nervous system, help with an easier delivery, and improve sleep. </p>
            </Col>

            <Col md={6} style={{ textAlign: 'right' }}>
              <img src={Programs4} />
            </Col>

          </Row>


          <Row className="programRow">
            <Col md={6} style={{ textAlign: 'left' }}>
              <img src={Programs5} />
            </Col>

            <Col md={6}>
              <h2> Yoga</h2>
              <p>You need to have the right balance for your mind, soul, and body. Your body needs to have the right kind of energy for all-round fitness and mental health, which is why we have incorporated yoga classes into our programs at Professional Fitness. Our yoga training provides a group of physical, mental, and spiritual discipline practices to help clients achieve wholesomeness.</p>
            </Col>

          </Row>


        </Container>
      </section>


      <section>
        <Container fluid>


          <Row className="experciseRow">
            <Col md={6} className="imageSec">
              <img src={ImageSec1} />
            </Col>

            <Col md={6} style={{ textAlign: 'left' }}>
              <h2>Swimming</h2>
              <p>Swimming is fun and engaging physically; it’s great for helping you relax and stay healthy all year long. Professional Fitness have qualified instructors to take you through the basics for swimming at any level, whether you’re a busy professional or just interested in taking swimming lessons. </p>

              <p>Whatever your desires are when it comes to finding very efficient fitness programs, rest assured that Professional Fitness has your best interest at heart.We have individual swimming programs and group classes for adults, and our swimming programs are designed to be flexible to accommodate your schedule and lifestyle.
              </p>

            </Col>

          </Row>

          <Row className="experciseRow">

            <Col md={6} style={{ textAlign: 'left' }}>
              <h2>Boot Camps</h2>
              <p> If you need that special time-off to relax and learn at the same time, we’ve got you covered. One of the things we do at Professional Fitness is to give our members the opportunity to take a break in a creative atmosphere. </p>

              <p>Our dedicated training team at Professional Fitness will be on ground to ensure you have a memorable experience when you sign up for our boot camp. So if you want to take your health and fitness journey to another level, our boot camp is just what you need to spice up your life this year.</p>


            </Col>

            <Col md={6} className="imageSec">
              <img src={ImageSec2} />
            </Col>

          </Row>



          <Row className="experciseRow">
            <Col md={6} className="imageSec">
              <img src={ImageSec3} />
            </Col>

            <Col md={6} style={{ textAlign: 'left' }}>
              <h2>Pilate’s programs</h2>
              <p>One of the best ‘whole body’ programs that anyone interested in fitness can get involved in and learn is Pilates. Thankfully, Professional Fitness has Pilate’s sessions that you can be a part of and build a healthy profile for yourself. Our Pilate’s program has very qualified handlers in charge to deliver premium experience to you, so you’d no doubt find every moment worth your while.
              </p>

            </Col>

          </Row>

          <Row className="experciseRow">

            <Col md={6} style={{ textAlign: 'left' }}>
              <h2>Self-defense classes</h2>
              <p>
                It makes no different whether you’re a busy professional, entrepreneur, or stay-at-home-mom; it’s important that you keep fit and healthy always. And while you’re at that, it’s a bonus for you if you can hold your own any day. Self-defense skills might come in handy when it’s a matter of life or death, that is why at Professional Fitness, we have very qualified and industry-approved fitness expert to take you through the rudiments of safety and personal protection.
              </p>

            </Col>

            <Col md={6} className="imageSec">
              <img src={ImageSec4} />
            </Col>

          </Row>

          <Row className="experciseRow">
            <Col md={6} className="imageSec">
              <img src={ImageSec5} />
            </Col>

            <Col md={6} style={{ textAlign: 'left' }}>
              <h2>Racing</h2>
              <p>
                If you love to fire up your adrenaline, you might like to consider racing to get your blood pumping. Racing can be immensely rewarding, and at Professional Fitness, we have several racing programs lined up - biking, motorcycle, Formula1, pro kart, and biking. Whichever one you choose, the result you get is fitness and health. We also have the best and most professional bikers and racing champions forming part of our in-house team to train you on the exact racing program you desie.
              </p>

            </Col>

          </Row>

          <Row className="experciseRow">

            <Col md={6} style={{ textAlign: 'left' }}>
              <h2>Yumeiho Therapy</h2>
              <p>
                Yumeiho is based on the belief that our pelvis is the center and the foundation of our skeleton, so any asymmetry of the pelvic position could trigger many diseases. A unique and efficient fitness therapy from Japan, Yumeilo therapy will help clients achieve that symmetry when it comes to their pelvis and spine, keeping them healthy and disease at bay. And just to mention, Professional Fitness is the only fitness outfit around in Dubai offering Yumeho therapy service to people.
              </p>

            </Col>

            <Col md={6} className="imageSec">
              <img src={ImageSec6} />
            </Col>

          </Row>

        </Container>


      </section>

      <section fluid className="home-section-black-bg" style={{ backgroundImage: 'url("' + ProfileSecBg + '")' }}>
        <Container>
          <h2>Professional</h2>
          <h1 style={{ color: 'white' }}>Fitness Training Programs </h1>
          <p>Our personal trainers and nutritionists spend hours understanding their sport and the fitness requirements, and come up with plans that support his racing during the off-season as well as the peak season to ensure he is ready to ride at all times.</p>
        </Container>

        <Container>

          <Row className="programRow">
            <Col md={6}>
              <p> Milina Petrovic is a Former Professional Athlete, Multiple WR Holder, NR Holder, and an accomplished Athlete. She’s a world-class professional swimmer, synchronized Swimmer, free diver, triathlete champion, underwater shooter, and lifeguard.
              </p>
              <p>
                With almost 20 Years’experience as Swimming and Synchronized Swimming Coach, and 10 Years as triathlon And free-diving Coach, Milina is has a lot of credit to her name. She earned a reputation as the coach offamous World Record Holder and Guinness Record Holder In Static Apnea, BrankoPetrovic.
              </p>
              <a class="c_btn"><span> View All Trainers</span> <ArrowRight size={25} /> </a>

            </Col>

            <Col md={6}>
              <div style={{ position: 'relative' }}>
                <img src={ProfileImg} />
                <div className="profileName">MILINA PETROVIC </div>
              </div>

            </Col>
          </Row>

        </Container>
      </section>

      <section>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13294.222961060721!2d73.12315824999999!3d33.59088229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1677008869294!5m2!1sen!2s' width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section>

        <Container className="section">
          <Row className="experciseRow">

            <Col md={4}>
              <h3 style={{color: '#555555'}}>CONTACT NOW</h3>
              <h1 style={{fontSize: '5rem', lineHeight: 1}}>Ask Us Anything</h1>
              <p>At Professional Fitness, we strive to provide the best health and fitness services to help our clients to live healthier, richer lives– we have been able to set a benchmark</p>

            </Col>


            <Col md={8}>
              <Form>
                <Form.Group md={6} className="mb-3" controlId="formBasicEmail">
                  <Row>
                    <Col md={6}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                    <Col md={6}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Row>
                    <Col md={12}>
                      <Form.Control type="text" placeholder="Subject" />
                    </Col>
                  </Row>
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Row>
                    <Col md={12}>
                      <Form.Control as="textarea" placeholder="Your message write here..." rows={3}  />
                    </Col>
                  </Row>
                 
                </Form.Group>


                <a type="submit" className="wButton">
                  Send Message
                </a>
              </Form>
            </Col>



          </Row>


        </Container>
      </section>




    </>

  );
}

export default Home;
