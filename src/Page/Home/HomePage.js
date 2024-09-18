import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'


const HomePage = () => {
  return (
    <div className='font '  style={{minHeight:'670px'}}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الأكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title="أحدث الأزياء" btntitle="المزيد" />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
      
    </div>
  )
}

export default HomePage