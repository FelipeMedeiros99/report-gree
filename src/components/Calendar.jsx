export default function Calendar({formData, setFormData}) {
  
  return (
    <div className="container-input">
      <label>Data</label>
      <input 
        type="date" 
        value={formData?.date} 
        onChange={(e)=>setFormData({...formData, date: e.target.value})}
      />
    </div>
  )
}