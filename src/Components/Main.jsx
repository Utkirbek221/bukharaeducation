import React from 'react'
import { useTranslation } from 'react-i18next';


export default function Main() {
    const { t } = useTranslation();
    return (
        <>
            <div className='bgimg rounded-[25px] w-full h-[500px]  mt-5 relative '>
                <div className='max-md:hidden flex desktop p-[20px]'>
                    <div className=' text text--top '>
                        <h1 className=''>{t("main.text")}</h1>
                    </div>
                    <div class="text text--knockout">
                        <h1 className='max-md:text-[10px]'>{t("main.text")}</h1>
                    </div>
                </div>
                <div className='mobil max-md:flex hidden '>
                    <div className='text text--top '>
                        <h1 className=''>{t("main.text")}</h1>
                    </div>
                    <div class="text text--knockout">
                        <h1 className='max-md:text-[10px]'>{t("main.text")}</h1>
                    </div>
                </div>
                <div className='flex justify-between  items-center absolute bottom-6  texts w-full p-[0px_15px_0px_15px] max-md:bottom-1'>
                    <div className=' text-[23px]  font-[600] text-[#45474B]'>
                        <div>
                            <h1 className='max-md:text-[18px]'> Ijtimoiy fanlar:</h1>
                            <ul className='max-md:text-[10px] text-[#F4CE14] text-[16px] grid grid-cols-2 '>
                                <li>Ingliz tili </li>
                                <li>Rus tili </li>
                                <li>Kares tili</li>
                                <li>Turk tili</li>
                                <li>Ona tili </li>
                                <li>Adabiyot</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='max-md:text-[18px]'>Gumanitar fanlar</h1>
                            <ul className='max-md:text-[10px] text-[#F4CE14] text-[16px] grid grid-cols-2 '>
                                <li>Tarix </li>
                                <li>Xuquq</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='max-md:text-[18px]'>Aniq fanlar</h1>
                            <ul className='max-md:text-[10px] text-[#F4CE14] text-[16px] grid grid-cols-2 '>
                                <li>Matematika </li>
                                <li>Fizika</li>
                            </ul>
                        </div>
                    </div>
                    <b className='mt-[140px] font-900 mr-[-160px] text-[50px] text-[#45474B] max-md:text-[25px] max-md:hidden max-lg:text-[35px] max-lg:mt-[20px] max-lg:mr-[-70px]'>{t("main.text2")}</b>
                    <div className=' text-[23px]  font-[600] text-[#45474B]'>
                        <div>
                            <h1 className='max-md:text-[18px]'>Tabiiy fanlar</h1>
                            <ul className='max-md:text-[10px] text-[#F4CE14] text-[16px] grid grid-cols-2 '>
                                <li>Biologiya</li>
                                <li>Kimyo</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='max-md:text-[18px] max-md:w-[120px] max-lg:w-[140px] max-lg:leading-5 max-md:leading-4'>Kompyuter savodxonligi</h1>
                            <ul className='max-md:text-[10px] text-[#F4CE14] text-[16px] grid grid-cols-2 '>
                                <li>Word</li>
                                <li>Excel</li>
                                <li>PowerPoint</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='max-md:text-[18px]'>Dasturlash tillari</h1>
                            <ul className='max-md:text-[10px] text-[#F4CE14] text-[16px] grid grid-cols-2 '>
                                <li>HTML </li>
                                <li>CSS</li>
                                <li>JavaScript </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
