import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Languages } from '../../utils/LanguageData.ts';
import { setDir, setLanguage } from '../../store/customizer/custoizerSlide.js';
import { useDispatch, useSelector } from 'react-redux';

export default function Language() {

  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer)
  const currentLang = Languages.find((lang) => lang.value === customizer.isLanguage) || Languages[0];

  const { i18n } = useTranslation();

  const handleChageLanguage = async ( value ) => {
    localStorage.setItem('SDC_language', JSON.stringify(value))

    
    dispatch(setLanguage(value))  
    if ( value === 'ar' ) {
      dispatch(setDir('rtl'))
    } else if ( value === 'en' ) {
      dispatch(setDir('ltr'))
    }

    window.location.reload();
    
  }

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [currentLang]);

  return (
    <div className='flex gap-4'>
      {Languages.map((lang) => (
        <span 
          key={lang.value}
          style={{ color: currentLang.value !== lang.value && "gray", cursor: "pointer" }} 
          onClick={() => handleChageLanguage(lang.value)}>{lang.name}
        </span>
      ))}
    </div>
  )
}

