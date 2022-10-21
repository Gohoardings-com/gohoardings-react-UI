// import { useEffect, useRef, useState } from 'react'
// import { DateRange } from 'react-date-range'
// import moment from 'moment'

// import format from 'date-fns/format'
// import { parseISO, addDays } from 'date-fns'

// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'

// const DateRangeComp = () => {

//   // date state
//   const [range, setRange] = useState([
//     {
//       // startDate:  Moment().format('DD-MM-YYYY'),
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection',
//     }
//   ])

//  const  totaldays = new Date(moment(range[0].endDate) - moment(range[0].startDate)).getDate() -1;

// // console.log(range[0].startDate);
// // console.log(range[0].endDate);
//   // open close
//   const [open, setOpen] = useState(false)

//   // get the target element to toggle 
//   const refOne = useRef(null)

//   useEffect(() => {
//     // event listeners
//     document.addEventListener("keydown", hideOnEscape, true)
//     document.addEventListener("click", hideOnClickOutside, true)
//   }, [])

//   // hide dropdown on ESC press
//   const hideOnEscape = (e) => {
//     // console.log(e.key)
//     if( e.key === "Escape" ) {
//       setOpen(false)
//     }
//   }

//   // Hide on outside click
//   const hideOnClickOutside = (e) => {
//     // console.log(refOne.current)
//     // console.log(e.target)
//     if( refOne.current && !refOne.current.contains(e.target) ) {
//       setOpen(false)
//     }
//   }

//   return (
//     <div className="calendarWrap w-100 h-100 text-center">
      
//       <input
//         value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
//         readOnly
//         className="inputBox bg-transparent border round-pill text-light w-100 text-center py-2"
//         onClick={ () => setOpen(open => !open) }
//       />

//       <div ref={refOne} className="position-absolute calender">
//         {open && 
//           <DateRange
//             onChange={item => setRange([item.selection])}
//             editableDateInputs={true}
//             moveRangeOnFirstSelection={false}
//             ranges={range}
//             months={1}
//             direction="horizontal"
//             className="calendarElement"
//           />
//         }
//       </div>

//     </div>
//   )
// }

// export default DateRangeComp