import React from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'
import Back from '../../Components/BackButton/Back'


const Faq = () => {
    return (
    <div className='container'>
        <div className='header'>
            <Back />
            <div className='text' ><h2>F.A.Q</h2></div>
        </div>
        <div className='ask'>
            <Card>
                <div className='bimg'><img src="Assets/bing.png" className='bingstyle' /></div>
                <div classname='headeroffaq'><h2>ASK QUESTIONS</h2></div>
                <div className='sendimg'><img src="Assets/send.png" /></div>
            </Card>
        </div>
        <div className='quesblock'>
            <div className='ques'>
                <Card>
                <div><p>Can i eat with alcohol</p></div>
                <div><img src="Assets/downarrow 2.png" /></div>
                </Card>
                <Card>
                <div><p>No, You can’t eat with an alcohol because it interacts with alcohol and may lead to Serious heart conditions.</p></div>
                
                </Card>
            </div>
            <div className='ques'>
                <Card>
                <div><p>Can i eat it with roti?</p></div>
                <div><img src="Assets/downarrow.png" /></div>
                </Card>
            </div>
            <div className='ques'>
                <Card>
                <div><p>What are some common food allergies or dietary restrictions?</p></div>
                <div><img src="Assets/downarrow.png" /></div>
                </Card>
            </div>
            <div className='ques'>
                <Card>
                <div><p>What are the health benefits of this food?</p></div>
                <div><img src="Assets/downarrow.png" /></div>
                </Card>
            </div>
            
        </div>

    </div>
    )
}

export default Faq