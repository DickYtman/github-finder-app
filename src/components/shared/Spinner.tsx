import Lottie from 'lottie-react'
import spinner from '../assets/loader.json'


const Spinner = () => {
  
  return (
    <div className='w-100 mt-20'>
      <Lottie 
      style={{width: '300px', margin: 'auto', display: 'block'}} 
      animationData={spinner} 
      loop={true} />
    </div>
  )
}

export default Spinner
