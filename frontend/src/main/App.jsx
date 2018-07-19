import React from 'react'
import '../common/template/dependeces'

import NabBar from  '../common/template/NaveBar'
import Menu from  '../common/template/Menu'
import Segundo from '../common/template/Segundo'
import Footer from '../common/template/Footer' 


export default props => (
    <div className='wrapper'>
        <NabBar />
        
        <Segundo />
        <Footer />
    </div>
)