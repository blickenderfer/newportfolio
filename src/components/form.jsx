import {useState} from 'react' 

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // if (!validateEmail(email)) {
    //     setErrorMessage('Please enter a valid email address.')
    //     return
    // } // I am assuming a helper function with a regex is needed to validate the email

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${firstName}!`);
        setFirstName('');
        setLastName('');
        setEmail('')
        setMessage('')
    };
    return (
        <div className='container text-center'>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={firstName}
                    name='firstName'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='First Name'
                />
                <input
                    value={lastName}
                    name='lastName'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Last Name'
                />
                <input 
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Email'
                />
                <textarea
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Message'/>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}