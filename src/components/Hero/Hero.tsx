import car from './../../assets/travel-bus.png'
import './Hero.scss'


const Hero = () =>{
    return(
        <div className='banner'>
            <div className='container'>
                <div className='running'>
                    <img className='image' src={car} alt="travel-bus" />
                </div>
            </div>
        </div>
    )
}

export default Hero