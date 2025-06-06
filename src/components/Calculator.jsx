export default function Calculator({formData, setFormData, calculatorVisibility, setCalculatorVisibility}) {

  return (
    <div className={`super-container-calculator ${calculatorVisibility}`}>
      <div className="container-calculator">
        <button className="button-close-calculator">X</button>
      </div>
    </div>
  )
}