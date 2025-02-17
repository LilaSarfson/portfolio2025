import HeaderHome from "../components/HeaderHome";
import HeaderSwitcher from "../components/HeaderSwitcher";
export default function HomeView (){
   return( 
   <section id='top' className="flex items-center min-h-screen w-5/6 sm:h-full sm:w-4/6 2xl:w-60p m-auto relative"> 
      <HeaderSwitcher 
            />     
        <HeaderHome/>
    </section> 
    )
}