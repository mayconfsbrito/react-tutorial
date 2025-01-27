// props = read-only properties that are shared between components.
//         A parent component can pass props to a child component.
//         <Component key=value />
//
// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
//               age: PropTypes.number
//
// defaultProps = default values for props in case they are not passed from the parent component
//                name: "Guest"
//
//
import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patric" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Mr. Krabs"/>
      <Student />
    </>
  )
}

export default App
