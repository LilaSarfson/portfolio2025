
import DarkModeToggle from './DarkModeToggle'
export default function HeaderSwitcher (props){
    return(
        <div className='absolute flex w-full gap-4 top-0 right-0 justify-end pt-6 xl:p-10'>
           <DarkModeToggle/>
        </div>
    )
}