import React from 'react';
import { img } from '../../images';
import { List, ListItem, Office } from './ContactList.styled';

const offices = [
  'cherkasy',
  'chernigiv',
  'vinnitsa',
  'dnipro',
  'kharkiv',
  'khmelnitzky',
  'kiev',
  'lviv',
  'odessa',
  'ternopol',
  'zaporozhye',
  'krivoyrog',
];

const ContactList = () => {
  return (
    <List>
      {offices.map(office => (
        <ListItem key={office}>
          <img width={150} src={img[office]} alt={office} />
          <div>
            <p>
              <Office>{office}</Office>, office
            </p>
            <ul>
              <li>
                <span>Phone:</span>
                <a href="tel:+380730000000">+380730000000</a>
              </li>
              <li>
                <span>Address:</span>
                <span>car delivery in a city</span>
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:order@autoprokat.net.ua">
                  order@autoprokat.net.ua
                </a>
              </li>
            </ul>
            <p>A car rental service works 24/7 according to your tariff!</p>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
