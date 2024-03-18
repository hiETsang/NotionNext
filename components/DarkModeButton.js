import { useGlobal } from '@/lib/global'
import { Moon, Sun } from './HeroIcons'
import { useImperativeHandle } from 'react'

/**
 * 深色模式按钮
 */
const DarkModeButton = (props) => {
  const { cRef, className } = props
  const { isDarkMode, toggleDarkMode } = useGlobal()

  /**
   * 对外暴露方法
   */
  useImperativeHandle(cRef, () => {
    return {
      handleChangeDarkMode: () => {
        toggleDarkMode()
      }
    }
  })

  return <div onClick={toggleDarkMode} className={`${className || ''} cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all`}>
        <div id='darkModeButton' className=' text-[#00000094] dark:text-[#FFFFFF94] w-5 h -5'> {isDarkMode ? <Sun /> : <Moon />}</div>
    </div>
}
export default DarkModeButton
