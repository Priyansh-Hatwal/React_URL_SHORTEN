import React, { useState } from 'react';
import Result from './Result';
import axios from "axios"
const Form = () => {
    const [formData, setFormData] = useState({ link: "", shorten: "" });

    function changeHandler(event) {
        
        const value = event.target.value;
        const name = event.target.name;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function clickHandler(event) {
        event.preventDefault();
        const link = formData.link;
        try {
            const out = await axios.get(`https://www.shareaholic.com/v2/share/shorten_link?apikey=c134ffd7a009ee909879406053c80122&url=${link}`);
            console.log("Output is ",out)
            const ans = out.data.data;
            setFormData(prev => ({
                ...prev,
                shorten: ans
            }));
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex flex-col w-[40rem] gap-6'>
            <input className='border-2 pl-2 border-black w-[40rem] rounded-md h-12' placeholder='Enter your link here...' type='text' id='link' name='link' value={formData.link} onChange={changeHandler} />
            <button className='bg-ylw h-11 font-bold text-wht w-[90px] border-2 border-black rounded-md' onClick={clickHandler}>Submit</button>
            <Result data={formData.shorten}/>
            
        </div>
    );
}

export default Form;
