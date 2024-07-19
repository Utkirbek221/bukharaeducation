import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoArrowUpRight } from 'react-icons/go';

const TelegramBot = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [fan, setFan] = useState('');
    const [response, setResponse] = useState('');
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isFanValid, setIsFanValid] = useState(true);

    const handleSendMessage = async () => {
        let valid = true;
        if (number.length < 9) {
            setIsNumberValid(false);
            setNumber('');
            valid = false;
        } else {
            setIsNumberValid(true);
        }
        if (!name) {
            setIsNameValid(false);
            valid = false;
        } else {
            setIsNameValid(true);
        }
        if (!fan) {
            setIsFanValid(false);
            valid = false;
        } else {
            setIsFanValid(true);
        }
        if (!valid) {
            return;
        }

        const botToken = '7434403063:AAGVoBPVFMjv-ydPA9UQS16bEMUTJmFqp2M';
        const chatId = '6959272563';
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const message = `Name: ${name}\nNumber: +998${number}\nFan: ${fan}`;

        try {
            const res = await axios.post(telegramApiUrl, {
                chat_id: chatId,
                text: message,
            });

            if (res.data.ok) {
                setResponse('Message sent successfully');
                setName('');
                setNumber('');
                setFan('');
            } else {
                setResponse('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
            setResponse('Error sending message to Telegram');
        }
    };
    const { t } = useTranslation();

    return (
        <>
        <div id="register" className=' bgimg2 min-h-[570px] rounded-[20px] mt-[60px] relative'>
            <div className=' top-[20px] left-[20px] p-8 rounded-[20px] max-w-[400px] absolute bg-[#45474B] text-[#F4CE14] max-md:p-5'>
                <h1 className="text-[28px] font-[600] max-md:text-[16px]">
                {t("bot.text")}
                </h1>
                <p className="text-[16px] max-w-[360px] font-[400] leading-[24px] mt-[6px] mb-[24px] max-md:text-[12px] max-md:leading-[18px] max-md:mt-[10px] max-md:mb-[20px]">
                {t("bot.texts")}
                </p>
                <div className="w-[360px] border-[1px] border-[#F4CE14] max-md:hidden"></div>
                <h5 className="font-[400] text-[12px] leading-[14px] mt-[32px] mb-[8px] max-md:text-[10px] max-md:mt-[0px]">
                {t("bot.texts2")}
                </h5>
                <div className="flex">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder={!isNameValid ? t("bot.texts6") : ''}
                        className={`bg-[#379777] p-[10px] text-[#F4CE14] rounded-[8px] outline-none flex-grow ${!isNameValid && 'placeholder-red-500'}`}
                    />
                </div>
                <h5 className="font-[400] text-[12px] leading-[14px] mt-[18px] mb-[8px] max-md:text-[10px]">
                {t("bot.texts3")}
                </h5>
                <div className="flex">
                    <span className="bg-[#379777] p-[10px] text-[#F4CE14] rounded-l-[8px] border-r border-[#F4CE14]">
                        +998
                    </span>
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        placeholder={!isNumberValid ? t("bot.texts7") : ''}
                        className={`bg-[#379777] p-[10px] text-[#F4CE14] rounded-r-[8px] outline-none flex-grow ${!isNumberValid && 'placeholder-red-500'}`}
                    />
                </div>
                <h5 className="font-[400] text-[12px] leading-[14px] mt-[32px] mb-[8px] max-md:text-[10px]">
                {t("bot.texts4")}

                </h5>
                <div className="flex">
                    <input
                        value={fan}
                        onChange={(e) => setFan(e.target.value)}
                        type="text"
                        placeholder={!isFanValid ? t("bot.texts8") : ''}
                        className={`bg-[#379777] p-[10px] text-[#F4CE14] rounded-[8px] outline-none flex-grow ${!isFanValid && 'placeholder-red-500'}`}
                    />
                </div>
                <button
                    onClick={handleSendMessage}
                    className="w-full h-[39px] text-[#379777] bg-[#F4CE14] rounded-[8px] mt-[40px] flex justify-center items-center gap-[6px] max-md:mt-[30px]"
                >{t("bot.texts5")}
                    <GoArrowUpRight className="text-[20px]" />
                </button>
                {response && <p>{response}</p>}
            </div>
        </div>
        
        </>
    );
};

export default TelegramBot;
