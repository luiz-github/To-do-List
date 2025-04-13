import './homePage.css'
import Button from '../../components/button/button.tsx'
import Input from '../../components/input/input.tsx'

function HomePage() {
  return (
    <>
      <div className='add-bar'>
        <Input/>
        <Button 
            classBtn="button-primary"
            name="Add Task"
            />
      </div>
    </>
  )
}

export default HomePage;