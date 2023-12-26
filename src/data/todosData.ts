import { uid } from '@helpers/uid'

export default [
  {
    id: uid(),
    text: 'Item One. Lorem ipsum dolor, sit amet Repellendus, neque?',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: uid(),
    text: 'Item Two. Lorem ipsum dolor sit amet.',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: uid(),
    text: 'Item Three. Lorem ipsum dolor sit amet consectetur.',
    isCompleted: true,
    isEditing: false,
  },
  {
    id: uid(),
    text: 'Item Four. Lorem ipsum dolor sit adipisicing.',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: uid(),
    text: 'Item Five. Lorem ipsum dolor sit amet.',
    isCompleted: false,
    isEditing: false,
  },
]
