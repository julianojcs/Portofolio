//Animation
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
//Styling
import styled from 'styled-components'

const ContactUs = () => {
    return (
            <ContactStyle
            variants={pageAnimation} 
            initial='hidden' 
            animate='show'
            exit='exit'
            style={{background: '#fff'}}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <a style={{textDecoration:'none', color: '#252525'}} target='black' href="https://mail.google.com/">
                        <Social variants={titleAnim}>
                            <Circle />
                            <h2>Send Us a Message</h2>
                        </Social>
                    </a>
                </Hide>
                <Hide>
                    <a style={{textDecoration:'none', color: '#252525'}} target='black' href="https://mail.google.com/">
                        <Social variants={titleAnim}>
                            <Circle />
                            <h2>Send an e-mail</h2>
                        </Social>
                    </a>
                </Hide>
                <Hide>
                    <a style={{textDecoration:'none', color: '#252525'}} target='black' href="https://www.facebook.com/jul14n0/">
                        <Social variants={titleAnim}>
                            <Circle />
                            <h2>Facebook</h2>
                        </Social>
                    </a>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #252525;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 2rem;
        font-size: 1rem;
    }
`

const Title = styled(motion.div)`
    margin-bottom: 4rem;
    color: #000;
    @media (max-width: 1300px) {
        margin-top: 5rem;
    }
`

const Hide = styled.div`
    display: flex;
    overflow: hidden;
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    background-color: #353535;
    @media (max-width: 600px) {
        width: 1.5rem;
        min-width: 1.5rem;
        height: 1.5rem;
    }
`
const Social = styled(motion.div)`
    display: flex;
    width: fit-content;
    align-items: center;
    h2 {
        margin: 2rem;
    }
    @media (max-width: 600px) {
        h2{
            font-size: 2rem;
        }
    }
`

export default ContactUs