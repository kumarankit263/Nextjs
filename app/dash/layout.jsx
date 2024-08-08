
import Sidebar from "../ui/sidebar/sidebar"
import styles from '@/app/ui/dash/dash.module.css'
const layout = ({children}) => {
  return (
    <div className={styles.container}>
    <div className={styles.menu}>
      <Sidebar/>
    </div>
    
    </div>
  )
}

export default layout
