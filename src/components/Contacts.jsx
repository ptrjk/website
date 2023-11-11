
import call from '../resources/phone-call.png'
import email from '../resources/email.png'
import maps from '../resources/maps.png'


function Contacts() {
    return (
        <div className='contact' id='contacts'>
            <h2> Kontakt na mňa</h2>
            <div className='box'>
                <div>
                    <img src={call} alt=''></img>
                    <p>+421 948 277 400</p>
                </div>
                <div>
                    <img src={email} alt=''></img>
                    <p>peter.rujak5@gmail.com</p>
                </div>
                <div>
                    <img src={maps} alt=''></img>
                    <p>Košice, Slovensko</p>
                </div>
            </div>


        </div>
    )


}


export default Contacts;