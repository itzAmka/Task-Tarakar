import { type FormEvent, type KeyboardEvent, useEffect, useRef } from 'react'
import { Form, Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { goBack } from '@helpers/index'
import { createTask } from '@helpers/tasks'

const CreateTask = () => {
  const modelRef = useRef<HTMLDialogElement>(null)
  const titleInputRef = useRef<HTMLInputElement>(null)

  const location = useLocation()

  const categoryId = location.pathname.split('/')[2]

  const handleShowModal = () => {
    if (modelRef.current) {
      modelRef.current.showModal()
    }
  }

  // prevent modal from closing when cliked `ESC` key
  const handlePreventModalClose = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      handleShowModal()
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement

    if (!titleInputRef.current) {
      toast.error('Please add a title')

      return
    }

    const title = titleInputRef.current.value

    if (!title) {
      toast.error('Title cannot be empty')
      return
    }

    if (title.length < 3) {
      toast.error('Title must be at least 3 characters long', {
        autoClose: 3000,
      })
      return
    }

    try {
      const result = await createTask(title, categoryId)

      if (!result) {
        toast.error('Something went wrong')
        return
      }

      if (result.ok) {
        toast.success(result.message ?? 'Task created successfully')
        target.reset()
        return
      }

      if (!result.ok) {
        toast.error(result.message ?? 'Something went wrong')
      }
    } catch (err: unknown) {
      console.log(err)

      toast.error((err as Error).message ?? 'Something went wrong')
      return
    }
  }

  useEffect(() => {
    handleShowModal()
  }, [])

  return (
    <>
      <dialog
        id='my_modal_3'
        className='modal'
        ref={modelRef}
        onKeyUp={handlePreventModalClose}
      >
        <div className='modal-box'>
          <div className='flex flex-col gap-10'>
            <div className='max-w-md flex flex-col gap-2'>
              <h1 className='md:text-2xl text-xl font-bold text-primary'>
                Create a new task
              </h1>
              <p className='text-sm'>Create a new task for a this category.</p>
            </div>

            <Form
              method='post'
              className='flex flex-col gap-6'
              onSubmit={handleSubmit}
            >
              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered input-primary w-full'
                  name='title'
                  ref={titleInputRef}
                />
                <button className='btn btn-primary'>Create Task</button>
              </div>

              <div className='flex flex-col gap-4'>
                <button
                  className='btn btn-warning btn-outline w-full'
                  type='button'
                  onClick={goBack}
                >
                  Cancel
                </button>
                {categoryId && (
                  <Link
                    to={`/tasks/${categoryId}`}
                    className='btn btn-primary btn-outline w-full'
                  >
                    See all tasks
                  </Link>
                )}
              </div>
            </Form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default CreateTask
