import './TouchWithUs.css'
import discuss from '../../assets/discuss.jpg'

export default function TouchWithUs() {
  return (
    <div className="row touch-with-us pb-5 text-white col-11 mx-auto d-flex align-items-center justify-content-center">
      <div className="image-container col-12"><img className='col-11' src={discuss} alt="" /></div>
      <div className="touch-with-us-content col-lg-6 col-sm-10 d-flex align-items-center justify-content-center flex-column">
        <a href="#about" className='touch-with-btn col-lg-4 col-md-4 col-sm-12 text-center'>Stay In Touch</a><br />
        <h1 className='text-center'>Ready To Talk</h1>
        <p className='text-center'>Feel free to contact us right now. We are pleased to announce our readiness to receive contacts from potential clients.</p>
      </div>
    </div>
  )
}