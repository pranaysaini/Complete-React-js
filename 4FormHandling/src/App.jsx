import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the Form", data)
  }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>

      <div> 
        <label>First Name</label>
        <input className={errors.firstName ? 'input-error' : ''} type="text" {...register('firstName', {
                                        required: true, 
                                        minLength:{value: 3, message:'Min Length atleast 3'}, 
                                        maxLength:{value:6, message:"MaxLength atleast 6"}})} />

        {errors.firstName && <p className="err-msg">{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Middle Name</label>
        <input type="text" {...register('middleName')} />
      </div>

      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName')} />
      </div>

      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit" } />

    </form>
  )
}

export default App
