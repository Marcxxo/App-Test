import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function ProfileForm() {
  const [form, setForm] = useState({
    id: '',
    name: '',
    title: '',
    image: '',
    bio: '',
    video_url: '',
    link: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { error } = await supabase.from('profiles').insert([form])
    if (error) {
      alert('Fehler beim Erstellen: ' + error.message)
    } else {
      alert('Profil erstellt!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="id" placeholder="Kurz-URL / ID" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="title" placeholder="Titel" onChange={handleChange} />
      <input name="image" placeholder="Bild-URL" onChange={handleChange} />
      <input name="bio" placeholder="Bio" onChange={handleChange} />
      <input name="video_url" placeholder="Video-URL" onChange={handleChange} />
      <input name="link" placeholder="Externer Link" onChange={handleChange} />
      <button type="submit">Visitenkarte erstellen</button>
    </form>
  )
}
