
import React, { useState } from 'react';
import CardComponent from '../components/CardComponent';

// Full info for each member
const boardsData = {
  Main: [
    {
      name: 'Yash Savalkar',
      role: 'President',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/WhatsApp_Image_2025-03-28_at_11.26.30_PM_-_Yash_2905_dtkpr5.jpg',
      linkedin: ' https://www.linkedin.com/in/yash-savalkar-321710289',
      github: 'https://github.com/YashSavalkar321',
      instagram: 'https://instagram.com/yash_savalkar'
    },
    {
      name: 'Yash Kinikar',
      role: 'Vice President',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/YK_-_Yash_Kinikar_yrbtgk.jpg',
      linkedin: 'https://linkedin.com/in/yash-kinikar',
      github: 'https://github.com/yashkinikar6',
      instagram: 'https://instagram.com/yash.kinikar'
    },

    {
      name: 'Pratik Deoke',
      role: 'Secretary',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/IMG_20250124_130728_-_245200011_Deoke_Pratik_Ravindra_w0eh71.jpg',
      linkedin: 'https://www.linkedin.com/in/pratikdeoke/',
      github: 'https://github.com/pratikdeoke',
      instagram: 'https://instagram.com/__pratikk01'
    },

    {
      name: 'NIRANJAN  MANE',
      role: 'Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Niranjan_A_-_Niranjan_Mane_qlh7ho.jpg',
      linkedin:  'https://linkedin.com/in/Niranjan Mane',
      github: 'https://github.com/niranjanmane45',
      instagram: 'https://instagram.com/niranjanmane_45'
    },

    
    {
      name: 'Suhani Khadake',
      role: 'Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/suhani_khadake_-_Suhani_Khadake_inxmrh.jpg',
      linkedin:  'https://linkedin.com/in/Suhani Khadake',
      github: 'https://github.com/suhanikhadake05',
      instagram: 'https://instagram.com/suhanikhadake'
    },

    {
      name: 'Alok Kulkarni',
      role: 'Club Service Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/23510013_-_Alok_Kulkarni_ipcqr8.jpg',
      linkedin: ' http://www.linkedin.com/in/alok-kulkarni-499259296',
      github: 'https://github.com/alokkulkarni-11',
      instagram: 'https://instagram.com/ig.alokkulkarni'
    },

    {
      name: 'Swarangi Toraskar',
      role: 'Club Service Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/WhatsApp_Image_2025-03-28_at_11.46.47_PM_-_Swarangi_Toraskar_uvp651.jpg',
      linkedin: ' https://www.linkedin.com/in/swarangi-toraskar-1430582a0/',
      github: 'https://github.com/Swarangii216',
      instagram: 'https://instagram.com/swarangi_216'
    },

    {
      name: 'Mahir  Bajole',
      role: 'Technical Head',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/WhatsApp_Image_2025-04-10_at_23.22.14_9a9e4dd5_-_245200008_Bajole_Mahir_Karansing_ntzoct.jpg',
      linkedin: ' https://www.linkedin.com/in/mahir-bajole-5a183a32b/',
      github: 'https://github.com/Mahir-Bajole',
      instagram: 'https://www.instagram.com/mahir_thakur.005/?hl=en'
    },

    {
      name: 'ZAID PATHAN',
      role: 'Marketing + PRO',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/23510029_-_ZAID_PATHAN_rdbure.jpg',
      linkedin: ' https://www.linkedin.com/in/zaid-pathan-5388b3292?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: '',
      instagram: 'https://instagram.com/the_zaidpathan'
    },

    {
      name: 'Parth Chikalkar',
      role: 'Editor + Designer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/23510111_-_Parth_Chikalkar_quhyzh.jpg',
      linkedin: ' https://www.linkedin.com/in/Parth Chikalkar',
      github: 'https://github.com/Parth-Chikalkar',
      instagram: 'https://instagram.com/parth_chikalkar'
    },

     {
      name: 'Gaurav Patil',
      role: 'Treasurer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/photo_-_gaurav_patil_asryru.jpg',
      linkedin: ' https://www.linkedin.com/in/gauravPatil5634',
      github: 'https://github.com/Gaurav-Patil-13',
      instagram: 'https://instagram.com/gaurav_patil_45_'
    },

    {
      name: 'Neeraj Ahire',
      role: 'Treasurer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/20250328_213820_-_niraj_ahire_rivw6t.jpg',
      linkedin: ' https://www.linkedin.com/in/niraj ahire',
      github: 'https://github.com/TL_Beast@#3',
      instagram: 'https://instagram.com/niraj ahire 07'
    },

    {
      name: 'ANKAN JAGTAP',
      role: 'Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/1718859560339_-_ANKAN_JAGTAP_mjg4ub.jpg',
      linkedin: 'https://www.linkedin.com/in/ankan-jagtap-0633ab28a',
      github: 'https://github.com/ANKANJAGTAP',
      instagram: 'https://instagram.com/ankanjagtap'
    },

    {
      name: 'Siddharth swami',
      role: 'Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/photo_-_Siddharth_Swami_supmxl.jpg',
      linkedin: 'https://www.linkedin.com/in/siddharth-swami-099898295?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/siddharthswami23',
      instagram: 'https://instagram.com/siddharthswami23'
    },
  ],


  Assistant: [
    {
      name: 'Prithvi Mujumdar',
      role: 'Assistant Secretory',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Prithvi_Mujumdar_page-0001_ozd5tl.jpg',
      linkedin: 'https://linkedin.com/in/Prithvi Mujumdar',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/prithvi.m_28'
    },

    {
      name: 'Anushka Jain',
      role: 'Assistant Secretory',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/1000312911_1_-_EN24198498_ANUSHKA_ANUBANDH_JAIN_page-0001_puplit.jpg',
      linkedin: 'https://www.linkedin.com/in/anushka-jain-a434a7335?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant2',
      instagram: 'https://instagram.com/anushkajain1866'
    },
   
    {
      name: 'Tanisha Borgave',
      role: 'Assistant Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/PHOTO-2025-07-31-15-49-35.jpg_-_Tanisha_Borgave_page-0001_p69nft.jpg',
      linkedin: 'https://linkedin.com/in/tanisha-borgave',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/tanishaa_borgave'
    },

    {
      name: 'Shruti Patil',
      role: 'Assistant Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Shruti_photo_-_Shruti_Patil_page-0001_bqjnwy.jpg',
      linkedin: 'https://linkedin.com/in/Shruti Patil',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/shruti_patil_6116'
    },

    {
      name: 'Tejas Dhembe',
      role: 'Assistant Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Tejas_NDA_photo_-_Tejas_Dhembe_page-0001_v6r3t1.jpg',
      linkedin: 'https://linkedin.com/in/Tejas Dhembe',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/tejas0905'
    },

    {
      name: 'Atharva Kulkarni',
      role: 'Assistant Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Atharva_kulkarni_page-0001_z0gfxr.jpg',
      linkedin: 'https://linkedin.com/in/Atharv Kulkarni',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/atharv_k_656'
    },

    {
      name: 'Harish Prabhakaran',
      role: 'Assistant Program Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Kaagaz_20250824_232612791567_1_-_Harish_Prabhakaran_page-0001_ooxgko.jpg',
      linkedin: 'https://linkedin.com/in/Harish Prabhakaran',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/_harish_prabhakaran_'
    },

    {
      name: 'Gargi Salunkhe',
      role: 'Assistant Club Service Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Gargi_Salunkhe_uhbwdj.jpg',
      linkedin: 'https://linkedin.com/in/Gargi Salunkhe',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/gargi__salunkhe'
    },

    {
      name: 'Gaurav Mane',
      role: 'Assistant Club Service Director ',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/1000018158_-_Gaurav_Mane_page-0001_xlb6tq.jpg',
      linkedin: 'https://www.linkedin.com/in/gaurav-mane-b9033b327?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://www.instagram.com/itz_gaurav_4566?igsh=MW9kMWZ4MTZ5dHlweQ=='
    },

    {
      name: 'Shreya Gavli',
      role: 'Assistant Club Service Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/My_image_-_EN24218670_GAVALI_SHREYA_VIJAYKUMAR_page-0001_y1qzbs.jpg',
      linkedin: 'https://www.linkedin.com/in/shreya-gavali-8991a0350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/shreya_gavali_756'
    },

    {
      name: 'Ayush Bhat',
      role: 'Assistant Club Service Director',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Image_-_Ayush_Bhat_page-0001_thcfgm.jpg',
      linkedin: 'https://www.linkedin.com/in/ayush-bhat-1a8b74329?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/assistant1'
    },

    {
      name: 'Bhargav Joshi',
      role: 'Assistant Code Expert',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/pphoto_-_Bhargav_Joshi_page-0001_lau8wk.jpg',
      linkedin: 'https://www.linkedin.com/in/bhargav-joshi-24747bj',
      github: 'https://github.com/assistant1',
      instagram: 'https://www.instagram.com/bhargav____16'
    },

    {
      name: 'Sameer Jamkar',
      role: 'Assistant Code Expert',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/DocScanner_24_Aug_2025_11-13_pm_-_Sameer_Jamkar_page-0001_ysszsm.jpg',
      linkedin: 'https://www.linkedin.com/in/sameer-jamkar-3717a1269?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/sameer_jamkar'
    },

    {
      name: 'Shreyas Magadum',
      role: 'Assistant Code Expert',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Passport_Size_-_Shreyas_Magdum_page-0001_a6dq0y.jpg',
      linkedin: 'https://www.linkedin.com/in/shreyas-magdum-946725329/',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/_chinyax_02'
    },

    {
      name: 'Om Galande',
      role: 'Assistant Code Expert',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/om_galande_rgl7dp.jpg',
      linkedin: 'https://www.linkedin.com/in/om-galande-791ba6334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/assistant1'
    },

    {
      name: 'Sudesh Karande',
      role: 'Assistant Code Expert',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/identyphoto_-_Sudesh_Karande_xvanuh.jpg',
      linkedin: 'https://linkedin.com/in/assistant1',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/assistant1'
    },

    {
      name: 'Om Deshmukh',
      role: 'Assistant Code Expert',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Om_Deshmukh_-_Om_Deshmukh_page-0001_qhgqje.jpg',
      linkedin: 'https://linkedin.com/in/Om Deshmukh',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/omdeshmukh_24'
    },

    

    {
      name: 'Swayam Sahu',
      role: 'Assistant Treasurer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Swaypic_-_Swayam_page-0001_ivyfnz.jpg',
      linkedin: 'https://linkedin.com/in/swayam.sahu',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/sahuswayam007'
    },

    {
      name: 'Hrushikesh Jadhav',
      role: 'Assistant Treasurer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Hrushikesh_Jadhav_i2tfcf.jpg',
      linkedin: 'https://linkedin.com/in/Hrushikesh Jadhav',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/hrushi_jadhav975'
    },

    {
      name: 'Ketaki Kulkarni',
      role: 'Assistant Design Head',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/myImage_-_EN24212422_KULKARNI_KETAKI_SUHAS_page-0001_ugej16.jpg',
      linkedin: 'https://www.linkedin.com/in/ketaki-kulkarni-961347335?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://www.instagram.com/ketakikulkarnii_2601?utm_source=qr&&igsh=ZHJlMXNvZnIzbWVo'
    },

    {
      name: 'Subodhi Khandare',
      role: 'Assistant Design Head',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/IMG-20250126-WA0041_-_Subodhi_page-0001_xlkzox.jpg',
      linkedin: 'https://www.linkedin.com/in/subodhi-khandare-2b812132a/',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/@subo__117'
    },

    {
      name: 'Muskan Fakir',
      role: 'Assistant Design Head',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Muskan_Photo2_-_Muskan_Fakir_page-0001_iorbdc.jpg',
      linkedin: 'https://www.linkedin.com/in/muskan-fakir-a412b0334/',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/assistant1'
    },

    {
      name: 'Sakshi Bhosale',
      role: 'Assistant Design Head',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/PHOTO_Sakshi_-_Sakshi_Bhosale_page-0001_jeak9r.jpg',
      linkedin: 'https://linkedin.com/in/Sakshi Bhosale',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/assistant1'
    },

    {
      name: 'Samrudhi Kitturkar',
      role: 'Assistant Design Head',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/photo_-_EN24277489_KITTURKAR_SAMRUDHI_SATYENDRAKUMAR_page-0001_xidiz2.jpg',
      linkedin: 'https://linkedin.com/in/Samrudhi Kitturkar',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/samruddhikitturkar'
    },

    {
      name: 'Disha Chougule',
      role: 'Assistant  Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Disha_Chougule_iriljx.jpg',
      linkedin: 'https://linkedin.com/in/Disha Chougule',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/disha____023'
    },

    {
      name: ' Sanket Thorat',
      role: 'Assistant Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Large_myphoto_-_Sanket_Thorat_page-0001_xj2wqv.jpg',
      linkedin: 'https://linkedin.com/in/assistant1',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/Sanket Thorat'
    },

    {
      name: 'Rihan Chaugule',
      role: 'Assistant  Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/imgACSES_-_Rihan_Chougule_page-0001_ppf7yr.jpg',
      linkedin: 'https://www.linkedin.com/in/rihan-chougule-451228373?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/rhnova.exe'
    },

    {
      name: ' Shreyash Olambe',
      role: 'Assistant  Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/IMG_20250222_142650_176_-_Shreyash_Olambe_page-0001_j0yyl1.jpg',
      linkedin: 'https://linkedin.com/in/Shreyash Olambe',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/Shreyas_hh14'
    },

    {
      name: 'Harshal Bansod',
      role: 'Assistant  Web Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/v1/image_-_harshal_page-0001_uixw6o.jpg',
      linkedin: 'https://linkedin.com/in/Harshal bansod',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/harshalbans0d'
    },

    {
      name: 'Shubham Koti',
      role: 'Assistant Aptitude Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Shubham_pic_-_shubham_Koti_page-0001_cf7xsp.jpg',
      linkedin: 'https://linkedin.com/in/Shubham Koti',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/_shubham_7006'
    },

    {
      name: 'Dhanashree Nirmale',
      role: 'Assistant Aptitude Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Photo..._1_-_Dhanashree_Nirmale_page-0001_i7cvji.jpg',
      linkedin: 'https://www.linkedin.com/in/dhanashree-nirmale-b07830329?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/assistant1'
    },

    {
      name: ' Ayush Badgujar',
      role: 'Assistant Aptitude Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/photo_-_Ayush_Badgujar_page-0001_m45nzf.jpg',
      linkedin: 'https://linkedin.com/in/Ayush Badgujar',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/ayush_badgujar14'
    },

    {
      name: 'Ronakkumar Hurkat',
      role: 'Assistant Aptitude Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Ronak_-_Ronakkumar_Hurkat_page-0001_owgiex.jpg',
      linkedin: 'https://linkedin.com/in/Ronakkumar Hurkat',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/ronak_hurkat'
    },

    {
      name: 'Ritesh Malgade',
      role: 'Assistant Aptitude Developer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Ritesh_Malgade_page-0001_beieh7.jpg',
      linkedin: 'https://www.linkedin.com/in/ritesh-malgade-b43952334?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/ritesh.__369'
    },

    {
      name: 'Neel Patil',
      role: 'Assistant Public Relations Officer ',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Untitled_document_-_Neel_Patil_page-0001_qsnxbm.jpg',
      linkedin: 'https://linkedin.com/in/Neel Patil',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/_neelpatil_07'
    },

    {
      name: 'Om Mali',
      role: 'Assistant Public Relations Officer ',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/Om_Photo_-_Om_Mali_page-0001_oftez0.jpg',
      linkedin: 'https://www.linkedin.com/in/om-mali-344837329/',
      github: 'https://github.com/assistant1',
      instagram: 'https://www.instagram.com/om.mali8421/'
    },

    {
      name: 'Suyash Pasare',
      role: 'Assistant Public Relations Officer',
      image: 'https://res.cloudinary.com/dpjpnqcnw/image/upload/1000641711_-_EN24187586_PASARE_SUYASH_SANDEEP_page-0001_yearm2.jpg',
      linkedin: 'https://www.linkedin.com/in/suyash-pasare-5a2833329?utm_source=share&&utm_campaign=share_via&&utm_content=profile&&utm_medium=android_app',
      github: 'https://github.com/assistant1',
      instagram: 'https://instagram.com/suyash_pasare_96k'
    },

  ],
  Member: [
    
  ],
};

const Boards = () => {
  const [activeBoard, setActiveBoard] = useState('Main');

  return (
    <div className="boards-container py-8 min-h-screen text-white">
      {/* Board Buttons */}
      <div className="w-full md:w-4/5 mx-auto h-14 flex justify-between items-center px-4 md:px-6 bg-gray-800 rounded-xl shadow-lg">
        {Object.keys(boardsData).map((board) => (
          <button
            key={board}
            onClick={() => setActiveBoard(board)}
            className={`font-semibold tracking-wide cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg w-1/3 text-center
              ${
                activeBoard === board
                  ? 'bg-purple-600 text-white shadow-xl scale-105'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
          >
            {board}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="mx-auto w-[80%]">
        <div className="mx-auto mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-4/5">
          {boardsData[activeBoard].map((member, index) => (
            <CardComponent
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              github={member.github}
              instagram={member.instagram}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boards;
