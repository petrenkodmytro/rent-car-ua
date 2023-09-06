import React from 'react';
import { img } from '../../images';
import { AboutSection, TitleAbout } from './About.styled';

const About = () => {
  return (
    <AboutSection>
      <TitleAbout>
        RentCarUA – new solutions in car rental sphere in Ukraine
      </TitleAbout>
      <p>
        RentCarUA considers one of the competitive services of car rental in
        Ukraine for a good reason. In the conditions of an excess demand on the
        services of car rental in Ukraine and tough competitive environment, the
        company is steadily holding a mark of a cheap but of a high quality and
        extensive car rental.
      </p>
      <img src={img.homeImg} alt="cars" />
      <p>
        No matter you book a car in advance or in the last minute of your
        arriving to the airport of Ukraine, you can be sure that you will not
        have to wait for a long time, our managers in the short terms give you a
        car which you have chosen or in the class you need, created a contract
        and get you to a place you need.
      </p>
      <TitleAbout>Prices on a car rental in Ukraine</TitleAbout>
      <p>
        Comparison of offers for a car rental – may be the only way to choose
        the best conditions. The cost for a rent, mark, service, class,
        availability – these are one of the most important factors that lets you
        make a choice for this or that company. But the search for an ideal car
        rental may be a long and time-consuming challenge because you cannot be
        sure for the first time whether the car is available and how much the
        cost of car rental will cost, and in order to find out all of these you
        need to spend a lot of time and nerves. That is why on RentCarUA website
        there is a fleet with already calculated prices and a useful calculator
        for counting in order for you to make in a couple if clicks the whole
        sum for a definite car rental period and book a car immediately.
      </p>
      <TitleAbout>RentCarUA – car rental for everybody</TitleAbout>
      <p>
        Besides anecdotes, managers of the company have wide knowledge in the
        sphere of a car rental and will be able to give you a professional
        consultation for car rental in Ukraine questions. Technical support
        works 24/7 that lets you quickly and on an operational basis to react on
        any difficulties that may appear while driving a car. Book quickly and
        take a car easily wherever you are in Ukraine. Make working and business
        trips, fascinating tour trips at the most beautiful places and hire a
        professional driver with a company. «Auto Arenda». Great and safe
        trips!!!
      </p>
    </AboutSection>
  );
};

export default About;
