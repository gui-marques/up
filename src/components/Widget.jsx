import Wpp from '../assets/bwpp.png'
export const Widget = (props) => {
  return (
    <div id='widget' className='relativo'>
      <div >
            <a target="blank" href="https://wa.me/5541998419824?text=Olá%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+planos+da+UpFlow.">
             <img src={Wpp} className='absolute bottom-0 right-48  h-42 w-32' alt=''/>
             
            </a>

            </div>
    </div>
  )
}
