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
    manager.toggleTask(taskId)
    setTasks([ ...manager.getTasks() ])
  }

  const handleDeleteTask = (taskId: number) => {
    manager.deleteTask(taskId)
    setTasks([ ...manager.getTasks() ]);

  }

  return (
    <>
      <div>
        <div className='flex-box-item auto-resize'>
          <Input
            inputValue={newTask}
            inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
            inputPlaceHolder="Type a new task"
          />
          <Button
            name="Add"
            btnOnClick={handleAddTask}
          />
        </div>
      </div>
      <div>
        <ul className='grid-container'>
          {tasks.map((task) => (
            
            <li className='grid-container-list-item' key={task.id}>
              <div className='grid-item-name'>
                {task.text} {task.done ? '(feito)' : ''}
              </div>
              <div>
                <Button
                  name={task.done ? '✅' : '❌'}
                  btnOnClick={() => handleToggleTask(task.id)}
                />
                <Button
                  name='Delete'
                  btnOnClick={() => handleDeleteTask(task.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default HomePage;