import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className='footer w-full max-h-[400px] mt-[50px] rounded-[20px] text-[#F5F7F8] grid grid-cols-2 p-[30px] gap-10 '>
        <div className=''>
          <h1 className='text-[25px] mb-4 max-md:text-[13px]'>{t("footer.text")}</h1>
          <p className='text-[25px] max-md:text-[13px]'>+998 97 845 05 15</p>
        </div>
        <div className=''>
          <h1 className='text-[25px] max-md:text-[13px]'>📍{t("footer.manzil")}</h1>
          <h1 className='text-[25px] max-md:text-[13px]'>📍{t("footer.manzil2")}</h1>
        </div>
      </div>
      <div className='h-[70px] w-full '></div>
    </>
  )
}
