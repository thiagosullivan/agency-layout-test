import React from 'react';
import styled from 'styled-components/macro';

const ContactFormContainer = styled.div`
    color: black;
    font-weight: 700;
    padding-bottom: 5px;
    display: inline-block;
    transition: border-bottom 0.2s;

    max-width: 500px;
    width: 100%;
    
    form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        width: 100%;
        font-family: 'Muli', sans-serif;

        input {
            margin-bottom: 1rem;
            height: 25px;
            border-radius: 3px;
            border: 2px solid #787878;
            padding: 10px;
            font-family: 'Muli', sans-serif;
            
            :focus {
                border: 2px solid #191919;
                transform: scale(1.01);
            }
        }

        textarea {
            margin-bottom: 1rem;
            height: 90px;
            border-radius: 3px;
            border: 2px solid #787878;
            padding: 10px;
            font-family: 'Muli', sans-serif;

            :focus {
                border: 2px solid #191919;
                transform: scale(1.01);
            }
        }

        button {
            background-color: #000000;
            color: #ffffff;
            border: 1px solid #000000;
            border-radius: 3px;
            padding: 1rem 0;
            font-family: 'Muli', sans-serif;
            transition: all 150ms ease-in;
            cursor: pointer;

            :hover {
                background-color: #ffffff;
                color: #000000;
            }
        }
    }
`;

function FormContact() {
    return (
        <ContactFormContainer>
            <form>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Company' />
                <input type="email" placeholder='Your E-mail' />
                <textarea placeholder='Your Message' />
                <button>Send</button>
            </form>
        </ContactFormContainer>
    );
}

export default FormContact;
