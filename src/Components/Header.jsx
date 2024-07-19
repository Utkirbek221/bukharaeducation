import React from 'react';
import logo from '../IMG/Logo.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    localStorage.setItem("lang",lng.target.value)
    i18n.changeLanguage(lng.target.value);
  };
    return (
        <>
            <div className='container mx-auto h-[100px] pt-2 flex justify-between items-center top-0 left-0 z-50 bg-[#45474B] fixed inset-x-0'>
                <img src={logo} alt="Logo" className='w-[150px] max-md:w-[100px]' />
                <div className='flex justify-center items-center gap-[40px] max-md:gap-[17px]'>
                    <a href='#register' className='button-27 max-md:p-[10px] max-md:rounded-[10px] max-md:text-[11px]' role="button">
                    {t("header.link")}
                    </a>
                    <select onChange={changeLanguage} defaultValue={i18n.language} name="selectedFruit" className='cursor-pointer bg-transparent text-[#F5F7F8]'>
                        <option value="uz">UZB</option>
                        <option value="ru">РУС</option>
                    </select>
                </div>
            </div>
            <div className='h-[100px]'></div> 
        </>
    );
}
