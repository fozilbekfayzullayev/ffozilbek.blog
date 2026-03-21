import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="max-w-[680px] w-full sm:px-[20px] px-0 mx-auto mt-[40px]">
      <div className="mb-[30px] flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-[16px] text-second-text hover:text-orange transition-colors duration-200">
          &larr; Orqaga
        </Link>
      </div>

      <div className="mb-[60px]">
        <h1 className="text-center text-[2rem] text-heading font-heading font-semibold mb-[20px]">
        Men haqimda
      </h1>
      <p className="leading-[1.5] tracking-wide whitespace-pre-line">
        Salom! Mening to'liq ismim Fozilbek Fayzullayev Ilhom o'g'li. Men
        Toshkent Davlat Iqtisodiyot Universitetida o'qiyman.<br/><br/>
        Dasturlashga birinchi kirib kelishim maktab paytlarida bo'lgan va hozirgacha web
        dasturlashning frontend qismini mustaqil o'rganib kelaman.Dasturlash
        universitet uchun yo'nalish tanlashga ham yordam bergan, hozirda
        o'zimning sohamga yaqinroq axborot xavfsizligi yo'nalishida o'qiyman.<br/><br/>
        Mening fikrimcha hammaning o'z qiziqishi (hobby) bo'ladi, shuningdek
        mening ham o'zimga yarasha qiziqishlarim bor, bularning eng ko'zga
        ko'rinarlisi bu rasm chizish.Chizgan rasmlarimni Instagram sahifamga
        qo'yib boraman, ularni <Link className="text-blue-500" to={'https://www.instagram.com/fay_zek_art/'} target="_blank">shu yerda</Link> ko'rishingiz mumkin. Bu o'zim haqimda
        qisqacha ma'lumotlar edi.<br/><br/> Blogimga xush kelibsiz va vaqt ajratib
        o‘qiyotganingiz uchun tashakkur!
      </p>
      </div>

      <div className="max-w-[400px] w-full mx-auto shadow-md rounded-[10px] p-[20px] mb-[40px]">
        <h3 className="font-bold">Agar!</h3>
        Izohlaringiz bo'lsa <Link className="text-blue-500" to={'https://t.me/wzworld'} target="_blank">yozishingiz</Link> mumkin
      </div>
    </div>
  );
};

export default AboutPage;
