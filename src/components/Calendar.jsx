export default function Calendar({formData, setFormData}) {

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  
  return (
    <div className="container-input">
      <label>Data</label>
      <input 
        type="date" 
        value={formData?.date || `${year}-${month}-${day}`} 
        onChange={(e)=>setFormData({...formData, date: e.target.value})}
      />
    </div>
  )
}