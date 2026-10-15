import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1content = (props) => {
  return (
    <div className='flex items-center px-18 py-8 h-[90vh] gap-10'>
      <LeftContent />
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1content
