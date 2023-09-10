import { img } from '../../images';
import {
  ContainerMainPage,
  DescriptionSection,
  ImgDescription,
  ItemDescription,
  ListDescription,
  TextDescription,
  TitleDescription,
  WrappInfo,
} from './Description.styled';

const Description = () => {
  return (
    <DescriptionSection>
      <ContainerMainPage>
        <ListDescription>
          <ItemDescription>
            <WrappInfo>
              <TitleDescription>What we offer you:</TitleDescription>
              <ul>
                <li>News cars.</li>
                <li>Full coverage.</li>
                <li>24-hour service.</li>
                <li>
                  Replacement vehicle if there is a breakdown or an accident.
                </li>
                <li>Low costs for car rental in Ukraine.</li>
                <li>Supply with a great season tires.</li>
                <li>
                  Giving and getting back a car in every part of the country.
                </li>
              </ul>
            </WrappInfo>
            <ImgDescription src={img.newCars} alt="newCars" />
          </ItemDescription>
          <ItemDescription>
            <WrappInfo>
              <TitleDescription>
                Car rental with a driver and transfers
              </TitleDescription>
              <TextDescription>
                If there is a necessity, we offer you transfer services from /
                to an airport, on a station. If you get used to European service
                of transfers, you can get it at our company, but in Ukraine. For
                providing service of business meetings, we give you a great car
                with professional drivers who know foreign languages on the
                highest level.
              </TextDescription>
            </WrappInfo>
            <ImgDescription src={img.transfer} alt="transfer" />
          </ItemDescription>
          <ItemDescription>
            <WrappInfo>
              <TitleDescription>Additional options</TitleDescription>
              <TextDescription>
                If you want to get something more than just car rental, it is
                worth turn your attention on additional services and options. We
                offer:
              </TextDescription>
              <ul>
                <li>Children seats, boosters</li>
                <li>Navigators into the cars</li>
                <li>HD videocamera for cars</li>
                <li>
                  Stocks of additional services for car rental without a deposit
                </li>
                <li>Drivers services</li>
              </ul>
            </WrappInfo>
            <ImgDescription src={img.boosters} alt="boosters" />
          </ItemDescription>
        </ListDescription>
      </ContainerMainPage>
    </DescriptionSection>
  );
};
export default Description;
