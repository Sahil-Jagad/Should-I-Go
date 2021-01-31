import "./DoctorPage.css"

const DoctorPage = () => {
  sessionStorage.removeItem("token")
  return (
    <div className="success">
      <div>
        <h1>Uh-Oh</h1>
        <p>We recommend you call a doctor. :(</p>
        <p>And make sure to mask up!</p>
      </div>
      
    </div>
  )
}

export default DoctorPage