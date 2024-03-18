import './App.css'
import Countries from './components/countries/Countries'


/* project ke sundor kore sajate protita component er jonno ekta file khulte hobe. All component folder 'components' folder modhe thakbe.
  ar single component folder gulo oi component er nam onusare hobe. Ar single component folder modhe thake oi component er jsx & css file.
*/
//components file name ta must components dite hobe
// rsc likhe tab e click korle  jsx file er ekta basic formate diye dey
// local site web  dekhte hole 'npm run dev' ternimal e likhe enter dite hobe.
// live site  dekhte hole 'npm run build' ternimal e likhe enter dite hobe..Er por 'surge dist' likhe run dilei domain name asbe oi ta chrome pest korte hobe.
// protibar 'npm run build' er por 'surge dist' command dile, protibar new domain name dibe.
// domain name change na korte caile je domain name 1st e paoya jabe oi domain name ta public file CNAME  file (with out extention) khule sei copy kora domain name pest korte hobe.
// proti update  'npm run build' likhe run korte hobe tarpor 'surge dist' likhe run korte hobe for live site.
// 'npm run build' likhe run korle ekta dist file create hoy. dist file netlify drop korle website netlify te run hobe. 
/* large project e components er vitore je props jabe, sei props kon type er seta age the define kore dite hoy. Ar choto project e seta
  off thakleo problem hoy na. props define off korar jonno .eslintrc.cjs file er ruls er mode "react/prop-types":['off'], eita likhte hoy.
*/
function App() {

  return (
    <>
      <div>
          <Countries></Countries>
      </div>
    </>
  )
}

export default App
