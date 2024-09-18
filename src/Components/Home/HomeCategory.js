import React from 'react';
import { Container, Row } from 'react-bootstrap';
import cat2 from '../../images/cat2.png';
import labtop from '../../images/labtop.png';
import sale from '../../images/sale.png';
import clothe from '../../images/clothe.png';
import pic from '../../images/pic.png';
import CategoryCard from './Category/CategoryCard';
import SubTitle from '../Utility/SubTitle';

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="أجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="أجهزة منزلية" img={pic} background="#FF6262" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
