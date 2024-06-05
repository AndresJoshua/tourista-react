import Clouds from '../../components/clouds/Clouds';
import Banner from '../../components/banner/Banner';
import Banner2 from '../../components/banner2/Banner2';
import Welcome from '../../components/welcome/Welcome';
import Video from '../../components/video/Video';
import Hover from '../../components/hover/Hover';
import Planets from '../../components/planets/Planets';
import Clouds2 from '../../components/clouds2/Clouds2';
import SalaryCalculator from '../../components/salaryCalculator/SalaryCalculator';
import Footer from '../../components/footer/Footer';
import Footer2 from '../../components/footer2/Footer2';
import Footer3 from '../../components/footer3/Footer3';
import Footer4 from '../../components/footer4/Footer4';
export default function Home() {
  return (
    <>
      <Banner2/>
      <Welcome/>
      <Clouds/>
        <Hover />
        <Clouds2/>
      <Planets/>
      <Video/>
      
      <SalaryCalculator/>
      <Footer2/>
      <Footer/>
      <Footer3/>
      <Footer4/>
     
    
      
      
      
    </>
  );
}