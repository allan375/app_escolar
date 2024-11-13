import {useState, useEffect} from 'react'
import SplashScreen from '../components/SplashScreen';

export default function Introducao() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <SplashScreen/>
      ) : (
        <div id='introducao' className='flex flex-col items-center bg-white h-[100vh] w-[100vw]'>
          <img src="/decorativo.png" alt="" className='w-full'/>

          <div className='flex flex-col items-center bg-white h-full px-[28px] py-[28px]'>
            <img src="/1.png" alt="" width={280}/>
            <h1 className='text-center font-[600] text-[15px] my-4'>Seja bem-vindo à EduExpert!</h1>
            <p className='text-center text-gray-600 text-[14px] text-justify'>Com nosso app, você pode ter controle sobre as suas notas e presença escolar, organizando os seus estudos de forma prática para monitorar seu progresso escolar, e alcançar metas definidas.</p>

            <div className='flex gap-[6px] my-6'>
              <div className='w-[11px] h-[11px] bg-blue-600 rounded-full'></div>
              <div className='w-[11px] h-[11px] bg-gray-400 rounded-full'></div>
              <div className='w-[11px] h-[11px] bg-gray-400 rounded-full'></div>
            </div>

            <a href="" className='py-[7px] px-14 bg-gradient-to-br from-[#1908FF] to-[#01f9ff] rounded-full text-white font-medium text-[14px]'>Próximo</a>
          </div>
        </div>
      )}
    </>
  )
}
