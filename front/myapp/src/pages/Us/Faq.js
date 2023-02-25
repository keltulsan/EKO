import { Collapse } from 'react-collapse';
import React, { Component, useEffect, useState } from 'react';
const getAllFaq = async () => {
    const response = await fetch(
        'http://localhost:4444/faq/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const faq = await response.json()
    return faq
}

export function FAQ() {
    const [faq, setFaq] = useState([]);
    const [isClick, setIsClick] = useState(-1);
    const [faqs, setFaqs] = useState([]);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    })
    useEffect(() => {
        const faqFetched = getAllFaq();
        faqFetched
            .then(result => setFaq(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

    useEffect(() => {
        setFaqs(faq.map((val, key) => {
            return <div key={key + 1} className="gap margin-top flex">
                <div onClick={() => {
                    setIsClick(isClick === key ? -1 : key)
                }} className="box background-color-2-4 flex align-center vertical">
                    <h2 className='title'>{val.name}</h2>
                    <Collapse isOpened={isClick == key}>
                        <div>
                            <p className={"text " + (dimensions.width <= 750 ? " padding-top-" : "")}>{val.desc}</p>
                        </div>
                    </Collapse>
                </div>
            </div>
        }))
    }, [faq, isClick])

    return <div className='container'>
        <h1 className='title stroke'>FAQ</h1>
        <div className="gap-plus center">
            <div className="vertical gap">
                {faqs}
            </div>
        </div>
    </div>
}

