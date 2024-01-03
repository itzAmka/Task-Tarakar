import { useRef, type ComponentProps, type FormEvent, useEffect } from 'react'
import { useRevalidator } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaEdit } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Task } from '@zod/tasksSchema'
import { updateTask } from '@helpers/tasks'

type UpdateTaskProps = ComponentProps<'div'> & {
  task: Task
}

export const UpdateTask = ({ task }: UpdateTaskProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const titleInputRef = useRef<HTMLInputElement>(null)

  const revalidator = useRevalidator()

  const handleShowModal = () => {
    if (!modalRef.current) return

    modalRef.current?.showModal()
  }

  const handleCloseModal = () => {
    if (!modalRef.current) return

    modalRef.current?.close()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!titleInputRef.current) {
      toast.error('Title is required to update task')
      return
    }

    const title = titleInputRef.current.value

    try {
      await updateTask(task.id, title)

      toast.success('Task updated successfully')

      handleCloseModal()
    } catch (err) {
      console.log(err)
      toast.error('Failed to delete task')
      return
    }

    revalidator.revalidate()
  }

  useEffect(() => {
    if (!titleInputRef.current) return

    titleInputRef.current.value = task.title
  }, [])

  return (
    <div>
      <button onClick={handleShowModal}>
        <FaEdit size='23px' className='text-info' />
      </button>

      <dialog id='my_modal_3' className='modal' ref={modalRef}>
        <div className='modal-box border border-success'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              <FaXmark />
            </button>
          </form>
          <form
            className='flex flex-col gap-4 max-w-sm mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-lg'>Update Task</h3>
                <p className='text-sm text-balance brightness-75'>
                  Update this task with the new title
                </p>
              </div>

              <input
                type='text'
                className='input input-bordered w-full'
                placeholder='Enter task title'
                ref={titleInputRef}
              />
            </div>

            <div className='grid grid-cols-2 gap-2 w-full'>
              <button
                type='button'
                className='btn btn-warning btn-outline'
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className='btn btn-success'>update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}
