import { type ComponentProps, useRef } from 'react'
import { useRevalidator } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MdDelete } from 'react-icons/md'
import { FaXmark } from 'react-icons/fa6'
import { deleteTask } from '@helpers/tasks/deleteTask'

type DeleteTaskButtonProps = ComponentProps<'div'> & {
  taskId: string
}

export const DeleteTaskButton = ({ taskId }: DeleteTaskButtonProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const revalidator = useRevalidator()

  const handleShowModal = () => {
    if (!modalRef.current) return

    modalRef.current?.showModal()
  }

  const handleCloseModal = () => {
    if (!modalRef.current) return

    modalRef.current?.close()
  }

  const handleDeleteTask = async () => {
    try {
      await deleteTask(taskId)

      toast.success('Task deleted successfully')

      handleCloseModal()
    } catch (err) {
      console.log(err)
      toast.error('Failed to delete task')
      return
    }

    revalidator.revalidate()
  }

  return (
    <div>
      <button onClick={handleShowModal}>
        <MdDelete size='25px' className='text-error' />
      </button>

      <dialog id='my_modal_3' className='modal' ref={modalRef}>
        <div className='modal-box border border-error'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              <FaXmark />
            </button>
          </form>
          <div className='flex flex-col items-center'>
            <h3 className='font-bold text-lg'>
              Are you want to delete this task?
            </h3>
            <p className='text-sm text-balance'>
              This action cannot be undone. This will permanently delete the
              task.
            </p>

            <div className='flex gap-2 mt-5'>
              <button
                className='btn btn-warning btn-outline'
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className='btn btn-error' onClick={handleDeleteTask}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}
