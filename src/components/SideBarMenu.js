
import SideBar from './SideBar'
export default function SideBarMenu (props) {
    return(

        <div className={`${props.estado} z-10 flex flex-col fixed left-4 items-center h-full`}>
            {/* El menu perse */}
                <div class="ml-6 flex w-20 flex-col items-center h-full dark:invert">
                  <div className='bg-black h-1/3 w-0.5'></div>

                    <div class="border-2 border-solid border-black">
                        <SideBar
                        justi='flex-col'/>
                    </div>
                <div className='bg-black h-full w-0.5'></div>
            </div>
        </div>
    )
}