import './homePage.css'
import Button from '../../components/button/button.tsx'
import Input from '../../components/input/input.tsx'
import { Task, TaskManager } from '../../utils/taskUtils.tsx'
import { useState } from 'react'

function HomePage() {
  const [manager] = useState(new TaskManager())
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    manager.addTask(newTask)
    setTasks([...manager.getTasks()])
    setNewTask('')
  }

  const handleToggleTask = (taskId: number) => {
    const  updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className='flex-box-item auto-resize'>
        <Input
          value={newTask}
          inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
          inputPlaceHolder="Type a new task"
        />
        <Button
          name="Add Task"
          btnOnClick={handleAddTask}
        />
      </div>
      <div className=''>
        <ul>
          {tasks.map((task) => (
            
            <li className='taskName' key={task.id}>
              {task.text} {task.done ? '(feito)' : ''}
              <Button
                name={task.done ? '❌' : '✅'}
                btnOnClick={() => handleToggleTask(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default HomePage;