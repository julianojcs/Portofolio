import styled from 'styled-components'
import { About, Description, Image, Hide } from '../styles'
import Toggle from "./Toggle";
import { AnimateSharedLayout } from 'framer-motion'
import { scrollReveal } from '../animation'
import { UseScroll } from './useScroll'

const faq = [
    {
        question: "How Do I Start",
        answer: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro."
        ]
    },
    {
        question: "Daily Schedule",
        answer: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo, perspiciatis quas ex facere eos.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro."
        ]
    },
    {
        question: "Difrerrent Payment Methods",
        answer: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro."
        ]
    },
    {
        question: "What Products Do You Offer",
        answer: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro."
        ]
    },
    {
        question: "How Do I Start",
        answer: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro."
        ]
    }
]

const FaqSection = () => {
    const [element, controls] = UseScroll()
    return (
        <Faq variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                {faq.map((item, index) => (
                    <Toggle question={item.question} key={index}>
                        <div className="answer">
                            {item.answer.map((p, index)=><p key={index}>{p}</p>)}
                        </div>
                    </Toggle>
                ))}
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question{
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0;
        p{
            padding: 1rem 0;
        }
    }
`;

export default FaqSection