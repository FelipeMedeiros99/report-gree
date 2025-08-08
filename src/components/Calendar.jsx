export default function Calendar({formData, setFormData}) {
  const {date} = formData;
  const updateDate = (e)=>{
    setFormData({...formData, date: e.target.value})
  }

  return (
    <div className="container-input">
      <label>Data</label>
      <input type="date" value={date} onChange={updateDate} />
    </div>
  )
}