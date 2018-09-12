import React from 'react'
import '../common/template/dependeces'

import NabBar from  '../common/template/NaveBar'
import Menu from  '../common/template/Menu'
import Segundo from '../common/template/Segundo'
import Footer from '../common/template/Footer' 
import Header from '../common/template/Header'
import Asside from '../common/template/Asside'
import Principal from '../common/template/Principal'
import AssideControl from '../common/template/AssideControl'
import Final from  '../common/template/Final'


export default props => (
    <div className='wrapper'>
        <Header />
        <Asside />
        <Footer />
        <Principal />
        <AssideControl />
        <Final />
      
    </div>
)