import { type ChangeEvent, type FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '@config/firebase.config'

const errorId = 'custom-id-error'
const successId = 'custom-id-success'

const AddTodoForm = () => {
  const [text, setText] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateText(text)) {
      toast.success('Added a new todo', {
        position: 'top-center',
        toastId: successId,
      })
      handleAddTodo()
      setDisabled(true)
    } else {
      toast.error('Please add a text field', {
        position: 'top-center',
        toastId: errorId,
      })
      setDisabled(true)
    }

    setTimeout(() => {
      setDisabled(false)
    }, 1500)
    setText('')
  }

  const handleAddTodo = async () => {
    const todosRef = collection(db, 'todos')
    await addDoc(todosRef, {
      text,
      isCompleted: false,
      userRef: auth?.currentUser?.uid,
    })
  }

  const validateText = (text: string) => {
    if (!text || text.length === 0) {
      return false
    } else if (text.length > 0) {
      return true
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex gap-3 sm:flex-row flex-col mt-12'
    >
      <input
        type='text'
        value={text}
        onChange={handleChange}
        className='input input-primary grow'
        aria-label='Add Todo'
      />
      <button className='btn btn-primary' disabled={disabled}>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodoForm
